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
  text.trim();
  if (text.length === 0) {
    return 0;
  }

  const words = text.split(/\s+/);

  const shortWords = words.filter(
    (word) => word.length <= length && word.length > 0
  );

  return shortWords.length;
};

export const getWordList = (list: string[]): string => {
  const words = list.filter((word) => word.length > 0);

  return words.join(",");
};

export const findPalindromWords = (text: string): string[] => {
  const minimumPalindromWordLength = 2;

  const words = text.trim().toLowerCase().split(/\s+/);
  const palindromWords = words.filter(
    (word) =>
      word.length > minimumPalindromWordLength &&
      word === word.split("").reverse().join("")
  );

  return palindromWords;
};

export const getWordFrecuencyCount = (
  text: string,
  frequenceWord: string
): number => {
  if (frequenceWord === "") {
    return 0;
  }

  const wordCount = text
    .split(/\s+/)
    .filter(
      (word) => word.toLowerCase() === frequenceWord.toLowerCase()
    ).length;

  return wordCount;
};
