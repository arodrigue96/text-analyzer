import { calculateTotalParagraphs } from "../index.js";

const text = "Cuantos años tienes\n\n 1 ytu?";
const expectedParagraphs = 2;
const totalParagraphs = calculateTotalParagraphs(text);

if (totalParagraphs === expectedParagraphs) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
