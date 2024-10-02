import exp from "constants";
import { getNumberOfShortWords } from "../index.js";

const text = `hola com
et dius`;
const expectedResult = 4;
const shortWordCount = getNumberOfShortWords(text, 4);

if (shortWordCount === expectedResult) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
