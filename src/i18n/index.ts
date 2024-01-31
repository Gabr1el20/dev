import english from './english_data.json'
import spanish from './spanish_data.json'
const LANGUAGES = {
  spanish: 'es',
  english: 'en'
}

export const getI18N = (currentLocale: string | undefined) => {
  if (currentLocale === LANGUAGES.spanish) return spanish
  if (currentLocale === LANGUAGES.english) return english
  return english
}