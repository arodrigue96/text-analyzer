import { getCamelCaseText } from "../index.js";

const text = "hola me Aniol";
const expectedCamelCase = "HolaMeAniol";
const camelCase = getCamelCaseText(text);

if (camelCase === expectedCamelCase) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
