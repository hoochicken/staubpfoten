# Nand - das Rollenspiel

## Github pages 

~~~shell
# in pycharm
git add .
git commit -m "change description"
git push
cd dictionary
# mkdocs gh-deploy -d dictionary
python -m mkdocs gh-deploy #-d dictionary
~~~

<https://hoochicken.github.io/staubpfoten/index>
<http://127.0.0.1:9098>

~~~shell
python get-pip.py
python.exe -m pip install --upgrade pip
pip --version
pip install mkdocs
# markdown_extensions:
#   - markdown_include.include
# markdown_include.include
pip install markdown-include
~~~

~~~shell
py get-pip.py
py -m pip install --upgrade pip
py -m pip --version
py -m pip install mkdocs
# markdown_extensions:
#   - markdown_include.include
# markdown_include.include
py -m pip install markdown-include
py -m pip install markdown-material
py -m pip install include-markdown
py -m mkdocs build
py -m mkdocs serve
~~~

## github pages loses focis

* go to: https://github.com/hoochicken/nand-rpg/settings/pages 
* Renew Custom domain with `rpg.ichbinnand.de`

## import markdown files

* Plugin https://github.com/mondeja/mkdocs-include-markdown-plugin
* config in mkdocs.yml
* user relative path in following tag `{% include-markdown "../welt/karten/bromsal-und-umgebung.md" %}`

## Slider ??

* https://www.piwheels.org/project/mkdocs-slides/
