import exp from "constants";
import { calculateShortWordsTotal } from "../index.js";

const text = `hola com
et dius`;
const expectedShortWordsTotal = 4;
const shortWordsTotal = calculateShortWordsTotal(text, 4);

if (shortWordsTotal === expectedShortWordsTotal) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
