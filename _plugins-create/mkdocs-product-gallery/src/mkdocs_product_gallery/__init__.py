
import html
import re

from markdown.extensions import Extension
from markdown.preprocessors import Preprocessor


IMAGE_RE = re.compile(
    r'^!\[(?P<alt>[^\]]*)\]'
    r'\((?P<src><[^>]+>|\S+)'
    r'(?:\s+"(?P<title>[^"]*)")?\)$'
)


class CarouselPreprocessor(Preprocessor):
    BLOCK_RE = re.compile(
        r'(?ms)^:::\s*carousel\s*\n'
        r'(.*?)'
        r'^:::\s*$'
    )

    def run(self, lines):
        text = "\n".join(lines)

        def replace(match):
            images = []

            for line in match.group(1).splitlines():
                image_match = IMAGE_RE.match(line.strip())
                if image_match:
                    item = image_match.groupdict()
                    item["src"] = item["src"].strip("<>")
                    images.append(item)

            if not images:
                return '<div class="product-gallery"></div>'

            def image_tag(item):
                src_path = item["src"].lstrip("/")
                src = html.escape("/" + src_path, quote=True)
                alt = html.escape(item["alt"], quote=True)
                title = html.escape(item["title"] or "", quote=True)

                return (
                    f'<img src="{src}" alt="{alt}" '
                    f'title="{title}">'
                    f'<div class="gallery-caption">{title}</div>'
                )

            buttons = []
            for index, item in enumerate(images):
                label = html.escape(
                    item["title"] or item["alt"], quote=True
                )
                buttons.append(
                    '<button type="button" '
                    'class="product-gallery__thumb" '
                    f'aria-label="{label}" '
                    f'aria-pressed="{str(index == 0).lower()}">'
                    f'{image_tag(item)}'
                    '</button>'
                )

            return (
                '<div class="product-gallery">\n'
                '  <div class="product-gallery__stage">\n'
                f'    {image_tag(images[0])}\n'
                '  </div>\n'
                '  <div class="product-gallery__thumbs" '
                'role="group" aria-label="Choose an image">\n'
                f'    {"".join(buttons)}\n'
                '  </div>\n'
                '</div>'
            )

        return self.BLOCK_RE.sub(replace, text).split("\n")


class CarouselExtension(Extension):
    def extendMarkdown(self, md):
        md.preprocessors.register(
            CarouselPreprocessor(md),
            "product_gallery",
            35,
        )


def makeExtension(**kwargs):
    return CarouselExtension(**kwargs)
