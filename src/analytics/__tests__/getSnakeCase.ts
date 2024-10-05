import { getSnakeCaseText } from "../index.js";

const text = "hola me llamo";
const expectedSnakeCaseText = "hola_me_llamo";
const snakeCaseText = getSnakeCaseText(text);

if (snakeCaseText === expectedSnakeCaseText) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
