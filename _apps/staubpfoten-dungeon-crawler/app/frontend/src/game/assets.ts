export const ASSETS = {
  background:
    'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-21/y3swciycaloq/bg-ameisenbau.png',
  halo: 'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y42guuaaalmq/char-halo-cat-helmet.png',
  nand: 'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y42gvgyaalma/char-nand-cat-helmet.png',
  queen: 'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-21/y3swdpqcalna/boss-koenigin.png',
  gum: 'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-21/y3swd4qcalmq/item-kaugummi.png',
  honey: 'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y4zzm4qcalma/item-hinog.png',
} as const;

export const CHARACTER_ART = {
  halo: ASSETS.halo,
  nand: ASSETS.nand,
} as const;

/** Large victory scene in the Hinog chamber, one per character. */
export const WIN_ART: Record<'halo' | 'nand', string> = {
  halo: 'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y44n65aaalma/win-halo-hinog.png',
  nand: 'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y44n7qqaaloq/win-nand-hinog.png',
};

/** Pixel art for every chamber of the wild bee nest, keyed by station id. */
export const ROOM_ART: Record<string, string> = {
  wachraum: 'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y42khfycalma/room-wachraum.png',
  korridor: 'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y42khsqcaloq/room-korridor.png',
  schlafraum: 'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y42kh7qcaloa/room-schlafraum.png',
  ventilationsraum:
    'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y42kimqcalnq/room-ventilationsraum.png',
  lager: 'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y42kizqcalna/room-lager.png',
  aufzuchtkammer:
    'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y42kjgicalmq/room-aufzuchtkammer.png',
  'ki-versteck': 'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y42kjtacalma/room-ki-versteck.png',
  abseits: 'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y42kkaacaloq/room-abseits.png',
  staubgrube: 'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y42kkmycaloa/room-staubgrube.png',
  fermentpilzkammer:
    'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y42kkzqcalnq/room-fermentpilzkammer.png',
  'verschuetteter-raum':
    'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y42klgqcalna/room-verschuetteter-raum.png',
  koeniginnenkammer:
    'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y42klticalmq/room-koeniginnenkammer.png',
  hinogkammer: 'https://mgx-backend-cdn.metadl.com/generate/images/394337/2026-10-22/y42kmaicalma/room-hinogkammer.png',
};
