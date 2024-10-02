import { getNumberOfCharacters } from "../index.js";

const text = `hola
`;
const expectedResult = 5;
const charactersCount = getNumberOfCharacters(text);

if (charactersCount === expectedResult) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
