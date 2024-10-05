import { getKebabCaseText } from "../index.js";

const text = "";
const expectedKebabCase = "";
const kebabCase = getKebabCaseText(text);

if (kebabCase === expectedKebabCase) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
