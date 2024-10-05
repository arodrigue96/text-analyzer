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
  return text.length;
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

export const getShortWords = (text: string, length = 4): string[] => {
  text.trim();

  if (text.length === 0) {
    return [];
  }

  const words = text.split(/\s+/);
  const shortWords = words.filter(
    (word) => word.length <= length && word.length > 0
  );

  return shortWords;
};

export const getWordList = (words: string[]): string => {
  if (words.length === 0) {
    return "";
  }

  return words.join(", ");
};

export const findPalindromWords = (text: string): string[] => {
  if (text.length === 0) {
    return [];
  }

  const minimumPalindromWordLength = 2;

  const words = text.trim().toLowerCase().split(/\s+/);
  const palindromWords = words.filter(
    (word) =>
      word.length > minimumPalindromWordLength &&
      word === word.split("").reverse().join("")
  );

  return palindromWords;
};

export const getWordFrecuencyCount = (text: string, word: string): number => {
  if (word === "") {
    return 0;
  }

  const wordFrecuency = text
    .split(/\s+/)
    .filter((word) => word.toLowerCase() === word.toLowerCase()).length;

  return wordFrecuency;
};

export const getReversedWords = (text: string): string => {
  if (text.length === 0) {
    return "";
  }

  return text.split("").reverse().join("");
};

export const getReversedText = (text: string): string => {
  if (text.length === 0) {
    return "";
  }

  return text.split(/\s+/).reverse().join(" ");
};
