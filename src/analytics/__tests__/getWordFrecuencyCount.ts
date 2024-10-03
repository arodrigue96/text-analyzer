import { getWordFrecuencyCount } from "../index.js";

const text = "Hola Aniol";
const frecuencyWord = "como";
const expectedWordFrecuency = 0;
const wordFrecuency = getWordFrecuencyCount(text, frecuencyWord);

if (wordFrecuency === expectedWordFrecuency) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
