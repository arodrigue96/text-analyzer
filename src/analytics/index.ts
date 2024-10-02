export const calculateParagraphsTotal = (text: string): number => {
  if (text === "") {
    return 0;
  }

  let paragraphCount = text.split("\n\n").length;

  return paragraphCount;
};
