# DESIGN – STAUBPFOTEN!

## Direction & Layout
- Zweck: Spielbares Würfel-Abenteuer im Browser für die ganze Familie, umgesetzt nach dem handgezeichneten Brett. Die Staubpfoten schleichen durch einen Ameisenbau und holen den „Ami-süßen“ Kaugummi der Königin.
- Stimmung: Retro-Pixel-Art, gemütlich-abenteuerlich und unterirdisch. Es soll nicht düster-gruselig und nicht nach generischem Tech-Dashboard aussehen.
- Prägende Idee: Der Bau wird als Querschnitt durch die Erde gezeigt. Die Stationen sind Kammern, die durch Gänge verbunden sind, genau wie auf dem Brett. Die aktive Kammer leuchtet bernsteinfarben.
- Referenz: die beiden Brett-Fotos des Nutzers (Charakterwahl links, Karte in der Mitte, Regelkasten rechts).
- Screens: 1) Titel und Charakterwahl (Halo und Nerd als Karten mit Werten), 2) Spiel: Karte mit 70 % Breite, Seitenleiste mit 30 % für Figur, Werte, Würfel und Log, 3) Ende: Sieg oder Niederlage.
- Max-Breite 1200px. Abstände im 8px-Raster. Breakpoints: unter 768px wird alles einspaltig, die Karte steht oben, der Würfel-Bereich darunter.
- Do: Pixel-Rahmen (harte Schatten, keine weichen Blurs), große Würfel-Schaltfläche, klare Erfolgs- und Fehlschlag-Rückmeldung.
- Don't: lila-blaue Verläufe, Glassmorphism, abgerundete Pillen-Buttons, weiche Schatten.

## Tokens
- Farben: Erde-Hintergrund #2B1B12, Gang/Fläche #4A2F1E, Fläche hell #6B4A30, Text #F6E7C8, Text gedämpft #C9B48E, Akzent Bernstein #F2B33D, Kaugummi-Pink #FF6FAE, Erfolg Moosgrün #7BC950, Fehlschlag #E5484D, Rahmen #120A06.
- Schriften (Google Fonts): „Press Start 2P“ für Überschriften und Buttons (12–28px, Zeilenhöhe 1.5) und „VT323“ für Fließtext und Log (20–24px, Zeilenhöhe 1.2).
- Formen: Radius 0 überall (Pixel-Look). Rahmen 4px #120A06, harter Schatten 4px 4px 0 #120A06. Abstände 4/8/16/24/32px.

## Shared Patterns & States
- PixelPanel: Fläche #4A2F1E, 4px Rahmen, harter Schatten, Padding 16px.
- PixelButton: Grundfarbe Bernstein #F2B33D mit Text #2B1B12. Hover hebt den Button um 2px an, Active senkt ihn um 2px und lässt den Schatten verschwinden. Disabled: 50 % Deckkraft.
- Kammer-Knoten: Kreis mit Rahmen in drei Zuständen: erledigt (grün), aktiv (bernstein, pulsiert mit 1,2s ease-in-out) und gesperrt (gedämpft).
- Würfel: 72px große Pixel-Kachel mit 600ms Wackel-Animation beim Wurf.
- Log: Liste der letzten Würfe, die neuesten stehen oben.
- Barrierefreiheit: Klickflächen mindestens 44px, sichtbarer Fokus-Rahmen 3px Pink, aria-labels für Icon-Buttons, Kontrast mindestens 4.5:1.

## Media
- Pixel-Art-Grafiken mit der Bildgenerierung erstellen: Titel-Hintergrund (Ameisenbau-Querschnitt, 16:9), Halo, Nerd, Ameisenkönigin und Kaugummi (jeweils mit transparentem Hintergrund).
- Die Kammern auf der Karte werden per CSS und SVG gezeichnet, Bilder dafür sind nicht nötig.
