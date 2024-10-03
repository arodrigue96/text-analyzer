import { calculateShortWordsTotal } from "../index.js";

const text = `     `;
const expectedShortWordsTotal = 0;
const shortWordsTotal = calculateShortWordsTotal(text);

if (shortWordsTotal === expectedShortWordsTotal) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
