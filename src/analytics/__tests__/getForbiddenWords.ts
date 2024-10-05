import { getForbiddenWords } from "../index.js";

const text = "Como te llamas Aniol";
const forbiddenWords = ["Aniol"];
const expectedForbiddenString = "Como te llamas *****";
const result = getForbiddenWords(text, forbiddenWords);

if (result === expectedForbiddenString) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
