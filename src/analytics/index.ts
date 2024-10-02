export const calculateParagraphsTotal = (text: string): number => {
  if (text === "") {
    return 0;
  }

  let paragraphCount = text.split("\n\n").length;

  return paragraphCount;
};

export const calculateTotalWordCount = (text: string): number => {
  if (text.length === 0) {
    return 0;
  }

  return text.trim().split(/\s+/).length;
};
