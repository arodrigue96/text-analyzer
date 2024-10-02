export const calculateTotalParagraphs = (text: string): number => {
  if (text === "") {
    return 0;
  }

  let paragraphs = text.split("\n\n").length;

  return paragraphs;
};
