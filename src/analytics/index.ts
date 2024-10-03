export const calculateParagraphsTotal = (text: string): number => {
  if (text === "") {
    return 0;
  }

  let paragraphTotal = text.split("\n\n").length;

  return paragraphTotal;
};

export const calculateWordsTotal = (text: string): number => {
  if (text.length === 0) {
    return 0;
  }

  return text.trim().split(/\s+/).length;
};

export const calculateCharactersTotal = (text: string): number => {
  if (text.length === 0) {
    return 0;
  }

  return text.split("").length;
};

export const calculateShortWordsTotal = (text: string, length = 4): number => {
  if (text.length === 0) {
    return 0;
  }

  const words = text.trim().split(/\s+/);

  const filteredWords = words.filter(
    (word) => word.length <= length && word.length > 0
  ).length;

  return filteredWords;
};

export const getWordList = (list: string[]): string => {
  const words = list.filter((word) => word.length > 0);

  return words.join(",");
};
