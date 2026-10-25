---
last_updated: 2026-10-21T19:45:00Z
---

# Architecture Design

## System Overview
Ein reines Frontend-Browser-Spiel: STAUBPFOTEN!, ein Würfel-Abenteuer für einen Spieler in Pixel-Art. Es gibt kein Backend.

## Tech Stack
Vite, React, TypeScript, Tailwind und shadcn-ui.

## Module Design
| Module | Responsibility | Key Files |
|--------|---------------|-----------|
| Spiellogik | Charaktere, Stationen, Proben und Reducer | src/game/data.ts, src/game/engine.ts |
| UI | Titel/Wahl, Karte, Seitenleiste, Ende | src/pages/Index.tsx, src/components/game/* |

## Tech Decisions
| Decision | Choice | Rationale |
|----------|--------|-----------|
| State | useReducer | einfacher, lokaler Spielzustand |
| Grafiken | generierte Pixel-PNGs + CSS-Karte | Pixel-Look nach Wunsch |

## File Tree Plan
src/game/{data,engine}.ts, src/components/game/{CharacterSelect,ColonyMap,SidePanel,EndScreen}.tsx, src/pages/Index.tsx

## Implementation Guide
Probe: 1W6 ≤ Wert (inkl. Laser-Bonus) bedeutet Erfolg. Darüber ist es ein Fehlschlag mit −1 SLP, eine 6 ist eine Katastrophe mit −2 SLP. Bei SLP 0 ist das Spiel verloren.
