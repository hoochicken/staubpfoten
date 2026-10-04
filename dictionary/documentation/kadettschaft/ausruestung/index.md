# Ausrüstung

## 📘 Übersicht: Alle Ausrüstungsgegenstände im neuen Codier-Schema

* Schema: [Typ] - [Truppe] - [Merkmale] - [Trageort] - [Modell].[Generation]

**Hinweise zur Anwendung**

* Position: Immer am Ende der vollständigen ID
* Reihenfolge: Alphabetisch sortiert empfohlen (aber nicht verpflichtend)
* Kombination: Beliebig viele möglich
* Weglassen: Keine Suffixe = Standardausführung

**🧪 Beispiele für vollständige ID-Codes (mit englischer und deutscher Bedeutung)**

* CLH-1000301 → Cadet · Loadout · Helmet → Kadett · Kleidung · Helm
* CNA-1000003T → Cadet · Nutrition & Shelter · Aliment · Thermal Resistant → Kadett · Verpflegung & Unterkunft · Ration · Temperaturfest
* EMC-5000201A → Elite · Module · Control Unit · Attached → Elite · Modul · Steuereinheit · Anzugintegriert
* GCT-2000671A → Ground · Container · Toolkit Case · Attached → Bodentruppe · Container · Werkzeugbox · Anzugintegriert
* KET-6000547LB → Universal · Kit · Toolroll · Low Profile + Bio-Shielded → Universal · Kit · Werkzeugrolle · Low Profile + Biologisch abgeschirmt
* CNT-1000703R → Cadet · Nutrition & Shelter · Tent · Regenerative → Kadett · Verpflegung & Unterkunft · Zelt · Regenerierbar
* ETC-5000127CF → Elite · Transceiver · Commsystem · Comms Integrated + Frequency → Elite · Transceiver · Kommunikationssystem · Kommunikation integriert + Funkfunktion
* GBT-2000732A → Ground · Backpack · Tactical Pouch · Attached → Bodentruppe · Rucksack · Anzugtasche · Anzugintegriert
* CGZ-1001345D → Cadet · Gear · Zip Module · Dual Module → Kadett · Zubehör · Schutztasche · Doppelmodul

### 🟥 Kadetten (K)

| Code         | Ausrüstung             | Bemerkung                                                        |
|--------------|------------------------|------------------------------------------------------------------|
| A-K-S-x-1.1  | Kadettenanzug          | Standardausführung (AK-1), keine integrierte Technik             |
| H-K-S-x-1.1  | Kadettenhelm           | Glashelm, einfache Schutzklasse                                  |
| H-K-V-x-3.1  | Kadettenhelm           | Vollschutzmodell für Ausseneinsätze                              |
| T-K-S-B-1.1	 | Funkmodul (Brustmodul) | sendet nicht selbst, verbunden mit Funkkiste                     |
| T-K-S-R-1.2  | unkkiste FK-2M         | schweres Gruppenfunkgerät, rückentragbar                         |
| F-K-I-O-1.5	 | Filter                 | Filtereinheit für Ausseneinsätze, IN-kompatibel, extern sichtbar |

### 🟦 Piloten (P)

| Code         | Ausrüstung                 | Bemerkung                                          |
|--------------|----------------------------|----------------------------------------------------|
| A-P-x-x-3.1  | 	Pilotenanzug (AP-3 )      | keine eigenen Module, nur strukturell tragend      |
| H-P-N-x-1.1	 | Pilotenhelm nach IN-Norm   | angepasst für Felinen (kein Senden)                |
| L-P-M-H-1.2  | 	Mikrofon-Leichtatmer      | direkt am Helm montiert, Funkweiterleitung an Bord |
| T-P-M-x-1.1	 | Interner Bordfunkanschluss | ohne eigenes Trageelement (Bordintegration)        |

### 🟩 Reguläre Truppe (R)

| Code          | Ausrüstung                   | Bemerkung                                          |
|---------------|------------------------------|----------------------------------------------------|
| A-R-S-x-1.1 	 | Regulärer Bodentrupp-Anzug   | Standard (Platzhalter)                             |
| H-R-S-x-1.1	  | Standardkampfhelm            | für reguläre Truppen, keine Sondermodule           |
| F-R-I-O-1.5	  | Filter (FS-IN-5)             | IN-kompatibel, aussen sichtbar, modular montierbar |
| L-R-S-A-1.3   | 	Standard-Leichtatmer (LS-3) | im Anzug integriert, ohne Mikrofon                 |

### 🟨 Elite (E) (Platzhalter / optional)

| Code          | Ausrüstung   | Bemerkung                                                      |
|---------------|--------------|----------------------------------------------------------------|
| A-E-C-x-4.1   | 	Elite-Anzug | mit erweiterten Funktionen (z. B. Tarnfeld, Kommandostruktur)  |
| H-E-HUD-x-3.1 | 	Elitehelm   | mit Sensorik, HUD-System, taktischer Datenanzeige              |
| T-E-CC-M-2.1  | 	Funkmodul   | für Elite-Kommandoführung, modular andockbar                   |

### 📎 Besondere Hinweise

* Trageort x = nicht definiert / nicht relevant (z. B. bei direkt angezogenen Kleidungsstücken)
* Merkmale sind frei kombinierbar, z.vB. SM, CV, HUDM
* Modular aufgebaute Geräte (z. B. Helm + Leichtatmer) werden immer separat codiert
* Muss aber noch richtig angepasst und formatiert werde nich alles stimmt ao aber das ist mal die grund Idee für ein typenbezeichnungsystem

## Anzug

![anzug-12.png](_images/anzuege/anzug-12.png)

Draussen brauchst Du immer einen Anzug. Ein Anzug besteht aus:

* Helm
* Anzug mit Brust- und Hinterklett
* Unterzeug
* Halssträmmlung
* Ventil
* Filter
* Stiefel

## **🧾Ausrüstung - ID-System

Aufbau von Ausrüstungskennungen für modulare, truppenspezifische Artikel**

### 🟢 Schritt 1: Truppengattung (Gattungskennung)

**📘 Erklärung**

Jede Ausrüstungseinheit ist einer Truppengattung zugewiesen (z. B. Kadetten, Eliteeinheit). Die Gattungskennung steht am Anfang der Identnummer (Buchstabe) und bestimmt zugleich die erste Ziffer der 7-stelligen laufenden Nummer.

**📚 Gattungs-Tabelle**

| **Buchstabe** | **EN** | **DE** | **Erste Ziffer der Identnummer** |
| --- | --- | --- | --- |
| **C** | Cadet | Kadetten | **1** |
| **G** | Ground | Bodentruppen | **2** |
| **A** | Air | Luftwaffe | **3** |
| **S** | Space | Weltraumkommando | **4** |
| **E** | Elite | Eliteeinheiten | **5** |
| **U** | Universal | Truppenübergreifend | **6** |

### 🔴 Schritt 2: Hauptgruppe (Versorgungsbereich)

**📘 Erklärung**

Jede Ausrüstung gehört zu einer Hauptgruppe – also einem übergeordneten Funktionsbereich (z. B. Kleidung, Module, Nahrung). Diese Hauptgruppe wird durch den zweiten Buchstaben in der Identnummer dargestellt.

| **Buchstabe** | **EN** | **DE** | **Beschreibung** |
| --- | --- | --- | --- |
| **L** | Loadout | Kleidung | Anzüge, Helme, Stiefel, Feldblusen etc. |
| **A** | Airsupport | Atemsysteme | Leichtatmer, Filter, Masken |
| **N** | Nutrition & Shelter | Verpflegung & Unterkunft | Nahrung, Wasser, Schlafsysteme, Zelte, Matten |
| **T** | Transceiver | Kommunikation | Funkgeräte, Mikrofone, Signalgeräte |
| **B** | Backpack | Tragelösungen | Rucksäcke, Packs, Umhängetaschen |
| **M** | Module | Technikmodule | Sensoren, Steuerungen, Energieversorgung |
| **K** | Kit | Funktionssätze | Reparatur-, Notfall-, Technik- und Überlebenssets |
| **G** | Gear | Zubehör | Licht, Werkzeuge, Patches, Handschuhe |
| **C** | Container | Transport & Lagerung | Boxen, Crates, Medkoffer, Versorgungsbehälter |

### 🔵 Schritt 3a: Produkttypen der Hauptgruppe „L = Loadout“

**📘 Erklärung**

Die Hauptgruppe „Loadout“ umfasst alle tragbaren Kleidungsstücke. Jeder Produkttyp ist durch einen eindeutigen Buchstaben (3. Stelle) und einen eigenen 100er-Nummernblock gekennzeichnet.

****📚 Produkttyp-Tabelle: Clothes (C)**

| **Typcode** | **EN** | **DE** | **Beschreibung** | **Identnummernbereich** |
| --- | --- | --- | --- | --- |
| **A** | Apparel | Anzug (Einteiler) | Einteiliger Dienstanzug | **xxx0001–xxx0100** |
| **T** | Trousers | Hose | Beinkleidung (meist Uniformbestandteil) | **xxx0101–xxx0200** |
| **F** | Fieldshirt | Feldbluse | Oberteil, meist über dem Anzug getragen | **xxx0201–xxx0300** |
| **H** | Helmet | Helm | Schutz- oder Kommunikationshelm | **xxx0301–xxx0400** |
| **W** | Waistgear | Weste | Überziehbare leichte Einsatzweste | **xxx0401–xxx0500** |
| **S** | Shoes | Stiefel | Einsatzstiefel, Marschstiefel | **xxx0501–xxx0600** |
| **V** | Vest | Trageweste | Taktische, modulare Trageplattform | **xxx0601–xxx0700** |
| **U** | Undergarment | Unterbekleidung | Thermowäsche, eng anliegender Bodylayer | **xxx0701–xxx0800** |

### 🔵 Schritt 3b: Produkttypen der Hauptgruppe „A = Airsupport“

**📘 Erklärung**

Diese Produkttypen umfassen alles zur Atemunterstützung: Leichtatmer, Filter, Masken, Ventile und Dichtsysteme.

****📚 Produkttyp-Tabelle: Airsupport (A)**

| **Typcode** | **EN** | **DE** | **Beschreibung** | **Identnummernbereich** |
| --- | --- | --- | --- | --- |
| **L** | Lungsupport | Leichtatmer | Eigenständiges Atemgerät mit Luftversorgung (z. B. Rucksackmodul) | **xxx0001–xxx0100** |
| **X** | Filter | Filtermodul | Partikel-/Gasfilter, auch für Anzugintegration geeignet | **xxx0101–xxx0200** |
| **M** | Mask | Atemmaske | Halbe oder volle Gesichtsschutzmaske | **xxx0201–xxx0300** |
| **I** | Interface | Atemanschluss / Ventil | Verbindungseinheit Maske ↔ Anzug / Leichtatmer | **xxx0301–xxx0400** |
| **S** | Seal | Dichtsystem | Dichtungen und Versiegelungselemente zur Kopplung von Modulen und Masken | **xxx0401–xxx0500** |

## 🔵 Schritt 3c: Produkttypen der Hauptgruppe „N = Nutrition & Shelter“

**📘 Erklärung**

Diese Produkttypen umfassen sowohl Verpflegungsartikel (Rationen, Wasser, Supplemente) als auch Unterkunfts- und Schlafausstattung (Zelte, Schlafsäcke, Matten etc.).

**📚 Produkttyp-Tabelle: Nutrition & Shelter (N)**

| **Typcode** | **EN** | **DE** | **Beschreibung** | **Identnummernbereich** |
| --- | --- | --- | --- | --- |
| **A** | Army Ration | Standard-Ration | Haltbare Vollverpflegung (1–3 Tage, gebrauchsfertig) | **xxx0001–xxx0100** |
| **W** | Waterpack | Wasserträger | Trinkbeutel, Kartuschen, tragbare Wassereinheiten | **xxx0101–xxx0200** |
| **C** | Concentrate | Hochkonzentrat | Kompaktportion für Notfälle (z. B. 500 kcal pro Stück) | **xxx0201–xxx0300** |
| **S** | Supplement | Nahrungsergänzung | Vitamintabletten, Mineralstoffe, Salze, Zusatznährstoffe | **xxx0301–xxx0400** |
| **H** | Heater | Wärmequelle | Chemische / elektrische Rationsheizer, Flammenlose Kochsysteme | **xxx0401–xxx0500** |
| **P** | Pack | Missionspaket | Komplettpaket aus Ration, Wasser, Supplement – missionsweise gebunden | **xxx0501–xxx0600** |
| **U** | Utensils | Essgeschirr | Besteck, Faltbecher, Kochgeschirr, Klappteller – direkt verwendbar | **xxx0601–xxx0700** |
| **T** | Tent | Zelt | Ein- oder Mehrpersonenzelt, mobil, feldtauglich | **xxx0701–xxx0800** |
| **B** | Bivvy | Biwaksack | Ultraleichtschlafhülle für Einzelschläfer | **xxx0801–xxx0900** |
| **L** | Sleeping Bag | Schlafsack | Kompakt verstaubarer Schlafsack mit Thermoschutz | **xxx0901–xxx1000** |
| **M** | Mat | Isomatte / Luftmatratze | Aufblasbare oder rollbare Schlafunterlage | **xxx1001–xxx1100** |
| **D** | Blanket | Decke | Felddecke, Thermodecke, isolierend oder wärmend | **xxx1101–xxx1200** |
| **N** | Raincover | Regenschutz | Plane, Tarp, Poncho, Zelttuch oder Überwurfmaterial | **xxx1201–xxx1300** |
| **K** | Camp Kit | Lagerausstattung | Zubehör: Heringe, Leine, Hammer, Zelttasche etc. | **xxx1301–xxx1400** |

🔵 Schritt 3d: Produkttypen der Hauptgruppe „T = Transceiver“ (Kommunikationssysteme)

**📘 Erklärung**

Diese Produkttypen enthalten alle Kommunikationsmittel zur Sprach- und Datenübertragung – ob portabel, integriert oder automatisch. Dazu gehören Funkgeräte, Mikrofone, Lautsprecher, Signalgeber und Kodierungssysteme. Systeme können modular oder vollständig integriert sein.

**📚 Produkttyp-Tabelle: Transceiver (T)**

| **Typcode** | **EN** | **DE** | **Beschreibung** | **Identnummernbereich** |
| --- | --- | --- | --- | --- |
| **R** | Radio Unit | Funkgerät | Eigenständige Funkgeräte – tragbar oder stationär (z. B. Funkkiste FK-2M) | **xxx0001–xxx0100** |
| **C** | Commsystem | Kommunikationssystem | Komplettsystem mit Kopfhörer, Mikrofon und Bedienelementen (z. B. PTT) | **xxx0101–xxx0200** |
| **M** | Microphone | Mikrofonmodul | Einzelmikrofon – z. B. Helm-Mic oder Maskenmodul | **xxx0201–xxx0300** |
| **B** | Beacon | Signalbake | Automatischer oder manuell auslösbarer Notfallsender | **xxx0301–xxx0400** |
| **A** | Antenna | Antennenmodul | Aufsetz- oder Zusatzantenne zur Reichweitenverstärkung | **xxx0401–xxx0500** |
| **S** | Speaker | Lautsprecher / Audioausgabe | Externer Lautsprecher, Helmlautgeber, eingebautes Ausgabemodul | **xxx0501–xxx0600** |
| **K** | Codec | Verschlüsselungseinheit | Kodierung / Dekodierung für gesicherte Sprach- oder Datenübertragung | **xxx0601–xxx0700** |

🔵 Schritt 3e: Produkttypen der Hauptgruppe „B = Backpack“ (Tragelösungen & Packsysteme)

**📘 Erklärung**

Diese Produkttypen umfassen alle Trageeinheiten für Ausrüstung, Verpflegung, Module oder Werkzeuge. Dazu gehören klassische Rucksäcke, modulare Packsysteme, Hartbehälter sowie universell tragbare Taschen. Auch direkt am Anzug angebrachte Taschen zählen dazu.

**📚 Produkttyp-Tabelle: Backpack (B)**

| **Typcode** | **EN** | **DE** | **Beschreibung** | **Identnummernbereich** |
| --- | --- | --- | --- | --- |
| **S** | Standardpack | Standard-Rucksack | Klassischer Rucksack mit mittlerem Volumen, vielseitig nutzbar | **xxx0001–xxx0100** |
| **A** | Assaultpack | Sturm-/Angriffspack | Leichter, kompakter Körpertragerucksack für schnellen Zugriff | **xxx0101–xxx0200** |
| C   | Containerpack | Hartschalen-Trageeinheit | Stoßfester, modularer Behälter für Technik, Munition oder Sensoren | **xxx0201–xxx0300** |
| H   | Hydropack | Wasser-/Trinksystem | Trinksack mit Schlauch oder Kartuschensystem, integrierbar in Rückenfläche | **xxx0301–xxx0400** |
| F   | Framepack | Tragerahmen | Modulares Tragegestell für schwere oder sperrige Lasten | **xxx0401–xxx0500** |
| U   | Utility Bag | Umhängetasche | Weiche, flexibel nutzbare Schultertasche | **xxx0501–xxx0600** |
| G   | Gear Pouch | Gürteltasche | Kleine Tasche mit Gurtbefestigung – z. B. für Werkzeug oder Munition | **xxx0601–xxx0700** |
| T   | Tactical Pouch | Anzugtasche | Direkt am Anzug befestigte Tasche (Klett, Schiene oder Reißverschluss) | **xxx0701–xxx0800** |

🔵 Schritt 3f: Produkttypen der Hauptgruppe „M = Module“ (Technikmodule inkl. Energieversorgung)

**📘 Erklärung**

Diese Produkttypen decken alle elektronischen oder funktionalen Module ab – von Sensorik und Steuerung bis hin zu Stromversorgungseinheiten. Module sind in der Regel nicht alleinstehend, sondern werden in Ausrüstungssysteme integriert oder angedockt.

**📚 Produkttyp-Tabelle: Module (M)**

| **Typcode** | **EN** | **DE** | **Beschreibung** | **Identnummernbereich** |
| --- | --- | --- | --- | --- |
| **S** | Sensor Unit | Sensorikmodul | Umwelt-, Vital- oder Lage-Sensoren (z. B. Temperatur, toxische Gase) | **xxx0001–xxx0100** |
| **D** | Diagnostics | Diagnostikeinheit | Auswertungseinheit für Vitaldaten, Technikstatus oder Umgebungsanalysen | **xxx0101–xxx0200** |
| **C** | Control Unit | Steuerungsmodul | Bedien- oder Steuerzentrale für angeschlossene Module | **xxx0201–xxx0300** |
| **L** | Link Module | Verbindungseinheit | Systemkopplung (z. B. mit Drohnen, Datenservern, IN-Netz) | **xxx0301–xxx0400** |
| **T** | Target Assist | Zielsystem / Datenoptik | Zielhilfen, Entfernungsmesser, HUD-Zusätze | **xxx0401–xxx0500** |
| **I** | Interface | Anschluss-/Übergabeeinheit | Elektrische, mechanische oder logische Schnittstelle | **xxx0501–xxx0600** |
| **P** | Power Core | Energieeinheit | Hochleistungszelle oder Kernmodul zur Stromversorgung | **xxx0601–xxx0700** |
| **B** | Battery Pack | Akkupack | Tragebatterie, Gurtzelle oder Reserveakku | **xxx0701–xxx0800** |
| **G** | Charging Unit | Ladeeinheit | Netzteil, Solar- oder Kinetikladestation | **xxx0801–xxx0900** |
| **H** | Hybrid Cell | Hybridmodul | Mischtechnik-Energiezelle (z. B. thermisch/chemisch/elektrisch) | **xxx0901–xxx1000** |

🔵 Schritt 3g: Produkttypen der Hauptgruppe „C = Container“ (Lagerung & Transport)

**📘 Erklärung**

Container dienen zur externen Lagerung, zum sicheren Transport oder zur strukturierten Verteilung von Material und Ausrüstung. Im Gegensatz zu Rucksäcken oder Pouches werden sie nicht am Körper getragen, sondern stationär genutzt oder maschinell bewegt.

**📚 Produkttyp-Tabelle: Container (C)**

| **Typcode** | **EN** | **DE** | **Beschreibung** | **Identnummernbereich** |
| --- | --- | --- | --- | --- |
| **H** | Hardcase | Hartschalenbox | Robuster Schutzbehälter für empfindliche Ausrüstung (z. B. Optik, Waffen) | **xxx0001–xxx0100** |
| **M** | Medcrate | Sanitätsbox | Strukturierte medizinische Transport- oder Versorgungsbox | **xxx0101–xxx0200** |
| **S** | Supplycase | Nachschubbox | Box für Essen, Wasser, Verbrauchsmaterial | **xxx0201–xxx0300** |
| **L** | Locker | Spind / Lagerbox | Persönliche Lagerkiste / mobiler Spind (z. B. für Missionsausrüstung) | **xxx0301–xxx0400** |
| **X** | ExploCase | Gefahrgutbehälter | Spezialsicherung für Sprengstoff, Plasmazellen, infektiöses Material | **xxx0401–xxx0500** |
| **Y** | Cryobox | Temperaturgeregelter Behälter | Für hitze- oder kälteempfindliche Substanzen | **xxx0501–xxx0600** |
| **T** | Toolkit Case | Werkzeugbox | Fächerbox mit Reparatur- und Diagnosetools | **xxx0601–xxx0700** |

🔵 Schritt 3h: Produkttypen der Hauptgruppe „K = Kit“ (Funktionssätze & Überlebensausstattung)

**📘 Erklärung**

Diese Produkttypen sind kompakte, einsatzspezifische Ausrüstungssets. Sie bestehen aus vorkonfigurierten Komponenten zur Reparatur, Erste Hilfe, technischen Analyse oder Überlebensunterstützung im Außeneinsatz. Alle Kits sind transportabel, meist in Taschen oder Rollen organisiert.

**📚 Produkttyp-Tabelle: Kit (K)**

| **Typcode** | **EN** | **DE** | **Beschreibung** | **Identnummernbereich** |
| --- | --- | --- | --- | --- |
| **R** | Repair Set | Reparaturkit | Werkzeuge & Ersatzteile für Feldreparatur (z. B. Helm, Waffe, Filter) | **xxx0001–xxx0100** |
| **S** | Survival Kit | Überlebensset | Feuerstarter, Kompass, Notverpflegung, Signalmittel | **xxx0101–xxx0200** |
| **M** | Medical Kit | Sanitätskit | Kompaktes Erste-Hilfe-Set mit Notfallmedikamenten | **xxx0201–xxx0300** |
| **E** | Engineering Kit | Technikerset | Spezialausstattung für technische Instandhaltung (z. B. Sensoren, Strom) | **xxx0301–xxx0400** |
| **Y** | Containment Kit | Isolations-/Sicherheitsset | Für biologische, chemische oder kontaminierende Materialien | **xxx0401–xxx0500** |
| **T** | Toolroll | Werkzeugrolle / Rolltasche | Ausrollbare Tasche für Diagnosetools oder Reparaturmaterial | **xxx0501–xxx0600** |

🔵 Schritt 3i: Produkttypen der Hauptgruppe „G = Gear“ (Zubehörartikel allgemein)

**📘 Erklärung**

Diese Produkttypen umfassen einzelne, funktionale Komponenten, die als Zubehör, Werkzeug, Marker oder modulare Ergänzung zur Ausrüstung getragen oder mitgeführt werden. Sie sind oft Teil taktischer Ausrüstung, modular auf Rüstungen, Gurten oder Westen befestigt.

**📚 Produkttyp-Tabelle: Gear (G)**

| **Typcode** | **EN** | **DE** | **Beschreibung** | **Identnummernbereich** |
| --- | --- | --- | --- | --- |
| **K** | Knife | Messer | Klapp- oder Feststehmesser für Technik, Überleben, Selbstschutz | **xxx0001–xxx0100** |
| **G** | Gloves | Handschuhe | Taktische / technische Handschuhe, auch Hitzeschutz oder Funkkontakt | **xxx0101–xxx0200** |
| **L** | Light Unit | Lichtquelle | Helmlicht, Taschenlampe, Signallicht | **xxx0201–xxx0300** |
| **T** | Toolkit | Mini-Werkzeugsatz | Kompaktes Feldwerkzeug, z. B. Multitool, Kombischlüssel | **xxx0301–xxx0400** |
| **C** | Clip Gear | Karabiner / Magnetsystem | Befestigungselemente, Sicherungsringe, Magnethalter | **xxx0401–xxx0500** |
| **B** | Belt Module | Gürtelsystem-Add-on | Halterung für Magazine, Licht, Pouch oder Werkzeug | **xxx0501–xxx0600** |
| **R** | Rope / Reel | Seil / Aufroller | Kevlarseil, Miniseilwinde, Kletterleine | **xxx0601–xxx0700** |
| **N** | Notepad Unit | Schreibset | Wasserdichtes Notizset mit Spezialstift für Karten / Protokolle | **xxx0701–xxx0800** |
| **D** | Data Stick | Datenträger | Robuster Speicherchip für Karten, Codes, Einsatzdaten | **xxx0801–xxx0900** |
| **P** | Patch Holder | Abzeichenhalter | Magnet- oder Klettplatte für Einheits- und Dienstgradabzeichen | **xxx0901–xxx1000** |
| **E** | Earpro | Gehörschutz | Aktiv- oder Passivschutz, teils mit Funkschnittstelle | **xxx1001–xxx1100** |
| **V** | Visor Shield | Sichtschutz | Visiersysteme, Blendfilter, taktische Optikaufsätze | **xxx1101–xxx1200** |
| **Y** | Signal Dye | Markierfarbe | Farbmodul zur Gebiets- oder Feinderkennung | **xxx1201–xxx1300** |
| **Z** | Zip Module | Vakuum-/Schutztasche | Flüssigkeitsdichte Transportlösung für sensible Technik oder Medikamente | **xxx1301–xxx1400** |

🟣 Schritt 4: Suffixe (Funktionskennzeichnung)

**📘 Erklärung**

Suffixe dienen zur Erweiterung der Identnummer, um besondere technische oder funktionale Merkmale zu kennzeichnen. Sie sind optional, können aber beliebig kombiniert werden (empfohlen: alphabetisch sortiert). Jede Funktion erhält einen einzelnen Buchstaben, basierend auf dem englischen Begriff.

**📚 Suffix-Tabelle (Funktionskennzeichnung, alphabetisch sortiert)**

| **Code** | **EN Term** | **DE Bezeichnung** | **Beschreibung** |
| --- | --- | --- | --- |
| A   | Attached | Anzugintegriert | Direkt am Anzug befestigt oder strukturell integriert |
| B   | Bio-Shielded | Biologisch abgeschirmt | Schutz gegen biologische Kontaminationen oder Gefahrenstoffe |
| C   | Comms Integrated | Kommunikation integriert | Vollständig integriertes Kommunikationssystem (z. B. Mic + Speaker + PTT) |
| D   | Dual Module | Doppelmodul | Zwei Funktionen kombiniert (z. B. Licht + Signalbake) |
| F   | Frequency | Funkfunktion | Enthält ein aktives Funkmodul |
| I   | Interstellar | IN-kompatibel | Entspricht interplanetarem Standard (IN-Netz / Sternflotte etc.) |
| L   | Low Profile | Niedrigprofil | Besonders flach, unauffällig, verdeckbar |
| M   | Mask-Compatible | Maskenkompatibel | Kompatibel mit Atemmasken oder Interfaces |
| P   | Armored | Gepanzert | Zusätzliche Panzerung gegen ballistische oder schockinduzierte Einwirkungen |
| R   | Regenerative | Regenerierbar | Filterbar, wiederaufladbar oder wiederverwertbar |
| S   | Special Form | Spezialbauform | Nichtstandardisierte Form: kompakt, faltbar, keramisch, extra-leicht etc. |
| T   | Thermal Resistant | Temperaturfest | Hitzebeständig oder kälteresistent für extreme Umgebungen |
| V   | Reinforced | Verstärkt | Mechanisch oder strukturell verstärkte Bauweise für erhöhte Stabilität |
| X   | Sealed System | Druckdicht / Raumtauglich | Für Umgebungen ohne atembare Atmosphäre (Raum, Unterwasser etc.) |
