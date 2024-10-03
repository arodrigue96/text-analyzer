import { calculateWordsTotal } from "../index.js";

const text = ``;
const expectedWords = 0;
const totalWords = calculateWordsTotal(text);

if (totalWords === expectedWords) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
