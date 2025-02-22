
const locales = {
  enUS: 'en-US',
  frFR: 'fr-FR',
} as const;

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: locales.enUS,
    icon: 'flagpack:gb-nir',
  },
  {
    label: 'French',
    value: 'fr',
    systemValue: locales.frFR,
    icon: 'flagpack:fr',
  },
];

export const defaultLang = allLangs[1]; // French
