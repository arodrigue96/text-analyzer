import { getReversedText } from "../index.js";

const text = "Hola como te llamas";
const expectedReversedText = "llamas te como Hola";
const reversedText = getReversedText(text);

if (reversedText === expectedReversedText) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
