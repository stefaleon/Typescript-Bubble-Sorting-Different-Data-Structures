import { Sorter } from "./Sorter";
import { ArrayOfNumbers } from "./ArrayOfNumbers";
import { StringOfCharacters } from "./StringOfCharacters";
import { LinkedListOfNumbers } from "./LinkedLIstOfNumbers";

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

const listSample = new LinkedListOfNumbers();
listSample.add(100);
listSample.add(42);
listSample.add(-10);
listSample.add(13);
listSample.add(77);
console.log("list before sorting:");
listSample.print();
const listSorter = new Sorter(listSample);
listSorter.sort();
console.log("list after sorting:");
listSample.print();
