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

  const wordsTotal = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  return wordsTotal;
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

export const getWordFrecuencyCount = (
  text: string,
  wantedWord: string
): number => {
  if (text.length === 0) {
    return 0;
  }

  const wordFrecuencyTotal = text
    .split(/\s+/)
    .filter((word) => word.toLowerCase() === wantedWord.toLowerCase()).length;

  return wordFrecuencyTotal;
};

export const getReversedWords = (text: string): string => {
  if (text.length === 0) {
    return "";
  }

  const words = text.split(/\s+/);
  const reversedWords = words
    .join(" ")
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");

  return reversedWords;
};

export const getReversedText = (text: string): string => {
  if (text.length === 0) {
    return "";
  }

  return text.split(/\s+/).reverse().join(" ");
};

export const getForbiddenWords = (
  text: string,
  forbiddenWords: string[]
): string => {
  if (text.length === 0) {
    return "";
  }

  const words = text.trim().split(/\s+/);

  const censoredText = words
    .map((word) => {
      if (forbiddenWords.includes(word)) {
        return "*".repeat(word.length);
      }

      return word;
    })
    .join(" ");

  return censoredText;
};

export const getCamelCaseText = (text: string): string => {
  if (text.length === 0) {
    return "";
  }

  const words = text.trim().split(/\s+/);

  const camelCaseWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return camelCaseWords.join("");
};

export const getKebabCaseText = (text: string): string => {
  if (text.length === 0) {
    return "";
  }

  const words = text.toLowerCase().trim().split(/\s+/);

  return words.join("-");
};

export const getSnakeCaseText = (text: string): string => {
  return text.toLowerCase().trim().split(/\s+/).join("_");
};
