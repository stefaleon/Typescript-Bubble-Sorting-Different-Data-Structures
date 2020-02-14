import { Sorter } from "./Sorter";
import { ArrayOfNumbers } from "./ArrayOfNumbers";

const arrayOfNumbers = new ArrayOfNumbers([501, 7, 0, -2.32, -22, 1]);
const sorter = new Sorter(arrayOfNumbers);
sorter.sort();
console.log(sorter.collection);
