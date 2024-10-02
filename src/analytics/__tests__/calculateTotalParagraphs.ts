import { calculateParagraphsTotal } from "../index.js";

const text = `Cuantos años tienes 1 y

tu?`;
const expectedParagraphs = 2;
const totalParagraphs = calculateParagraphsTotal(text);

if (totalParagraphs === expectedParagraphs) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
