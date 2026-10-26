
import html
import re

from markdown.extensions import Extension
from markdown.preprocessors import Preprocessor
from mkdocs.utils import get_relative_url


class DicePreprocessor(Preprocessor):
    BLOCK_RE = re.compile(
        r'(?ms)^:::\s*dice\b(?P<attrs>[^\n]*)\n'
        r'.*?'
        r'^:::\s*$'
    )

    def __init__(self, md, page_url=""):
        super().__init__(md)
        self.page_url = page_url

    def run(self, lines):
        text = "\n".join(lines)

        def replace(match):
            attrs = dict(
                re.findall(
                    r'([\w-]+)\s*=\s*"([^"]*)"',
                    match.group("attrs"),
                )
            )

            name = html.escape(
                attrs.get("eigenschaft", "Eigenschaft"),
                quote=True,
            )

            try:
                value = int(attrs.get("wert", "3"))
            except ValueError:
                value = 3

            value = max(1, min(5, value))

            image_base = get_relative_url(
                "assets/images/dice/",
                self.page_url,
            )

            return (
                f'<div class="dice-check" data-image-base="{image_base}">\n'
                f'<h3 class="dice-check__title">Würfelprobe: {name}</h3>\n'
                f'<label class="dice-check__label">'
                f'Eigenschaftswert '
                f'<input name="dice" class="dice-check__value" type="number" '
                f'min="1" max="5" value="{value}"></label>\n'
                f'<div class="dice-check__controls">\n'
                f'<img class="dice-check__image" '
                f'src="{image_base}default.png" '
                f'alt="Würfel vor dem Wurf">\n'
                f'<button type="button" class="dice-check__roll">'
                f'Jetzt würfeln</button>\n'
                f'</div>\n'
                f'<div class="dice-check__result" role="status" '
                f'aria-live="polite">Bereit für die Probe.</div>\n'
                f'</div>'
            )

        return self.BLOCK_RE.sub(replace, text).split("\n")


class DiceExtension(Extension):
    def __init__(self, page_url="", **kwargs):
        self.page_url = page_url
        super().__init__(**kwargs)

    def extendMarkdown(self, md):
        md.preprocessors.register(
            DicePreprocessor(md, self.page_url),
            "dice_preprocessor",
            35,
        )


def makeExtension(**kwargs):
    return DiceExtension(**kwargs)
