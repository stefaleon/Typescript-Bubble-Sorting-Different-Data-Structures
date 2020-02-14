import { Sorter } from "./Sorter";
import { ArrayOfNumbers } from "./ArrayOfNumbers";
import { StringOfCharacters } from "./StringOfCharacters";

const arrayOfNumbersSample = new ArrayOfNumbers([501, 7, 0, -2.32, -22, 1]);
const arrSorter = new Sorter(arrayOfNumbersSample);
arrSorter.sort();
console.log(arrSorter.collection);

const stringOfCharsSample = new StringOfCharacters(
  "asdFzxcVQWERTYBNMghjklyuiop"
);
const stringSorter = new Sorter(stringOfCharsSample);
stringSorter.sort();
console.log(stringSorter.collection);
