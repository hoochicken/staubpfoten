
import html
import re
from pathlib import Path

from mkdocs.plugins import BasePlugin
from mkdocs.structure.files import File
from mkdocs.utils import get_relative_url


class DicePlugin(BasePlugin):
    config_scheme = ()

    BLOCK_RE = re.compile(
        r'(?ms)^:::\s*dice\b(?P<attrs>[^\n]*)\n'
        r'.*?'
        r'^:::\s*$'
    )

    def on_config(self, config):
        config.extra_css = list(config.extra_css or [])
        config.extra_javascript = list(config.extra_javascript or [])

        if "assets/css/dice.css" not in config.extra_css:
            config.extra_css.append("assets/css/dice.css")

        if "assets/js/dice.js" not in config.extra_javascript:
            config.extra_javascript.append("assets/js/dice.js")

        return config

    def on_files(self, files, config):
        package_assets = Path(__file__).parent / "assets"

        assets = [
            ("css/dice.css", "assets/css/dice.css"),
            ("js/dice.js", "assets/js/dice.js"),
            *[
                (
                    f"images/dice/{name}.png",
                    f"assets/images/dice/{name}.png",
                )
                for name in ["default", "1", "2", "3", "4", "5", "6"]
            ],
        ]

        for source_relative, destination in assets:
            source = package_assets / source_relative

            if not source.is_file():
                raise FileNotFoundError(
                    f"Dice plugin asset not found: {source}"
                )

            files.append(
                File(
                    path=source.name,
                    src_dir=str(source.parent),
                    dest_dir=str(
                        Path(config.site_dir) / Path(destination).parent
                    ),
                    use_directory_urls=config.use_directory_urls,
                )
            )

        return files

    def on_page_markdown(self, markdown, page, config, files):
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
                page.url,
            )

            return (
                '<div class="dice-check" '
                f'data-image-base="{image_base}">\n'
                f'<h3 class="dice-check__title">Würfelprobe: {name}</h3>\n'
                '<label class="dice-check__label">'
                'Eigenschaftswert '
                f'<input class="dice-check__value" type="number" '
                f'min="1" max="5" value="{value}">'
                '</label>\n'
                '<div class="dice-check__controls">\n'
                f'<img class="dice-check__image" '
                f'src="{image_base}default.png" '
                'alt="Würfel vor dem Wurf">\n'
                '<button type="button" class="dice-check__roll">'
                'Jetzt würfeln</button>\n'
                '</div>\n'
                '<div class="dice-check__result" role="status" '
                'aria-live="polite">Bereit für die Probe.</div>\n'
                '</div>'
            )

        return self.BLOCK_RE.sub(replace, markdown)
