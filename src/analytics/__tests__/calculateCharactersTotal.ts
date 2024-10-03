import { calculateCharactersTotal } from "../index.js";

const text = `hola
`;
const expectedCharactersTotal = 5;
const charactersTotal = calculateCharactersTotal(text);

if (charactersTotal === expectedCharactersTotal) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
