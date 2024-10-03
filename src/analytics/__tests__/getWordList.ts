import { getWordList } from "../index.js";

const words: string[] = [];
const expectedWords = "";
const wordList = getWordList(words);

if (wordList === expectedWords) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
