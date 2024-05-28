export enum Language {
  EN = "en",
  ES = "es",
}

export const mainLanguage: Language = Language.ES;

const memo = new Map();

export const normalizeLanguage = (language: string): Language => {
  if (memo.has(language)) {
    return memo.get(language);
  }

  if (language.toLowerCase().includes(Language.ES.toLowerCase())) {
    memo.set(language, Language.ES);
    return Language.ES;
  }

  memo.set(language, Language.EN);

  return Language.ES;
};
