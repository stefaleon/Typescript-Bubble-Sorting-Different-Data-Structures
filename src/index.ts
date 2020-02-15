import { ArrayOfNumbers } from "./ArrayOfNumbers";
import { StringOfCharacters } from "./StringOfCharacters";
import { LinkedListOfNumbers } from "./LinkedLIstOfNumbers";

const arrayOfNumbersSample = new ArrayOfNumbers([501, 7, 0, -2.32, -22, 1]);
arrayOfNumbersSample.sort();
console.log(arrayOfNumbersSample);

const stringOfCharsSample = new StringOfCharacters(
  "asdFzxcVQWERTYBNMghjklyuiop"
);
stringOfCharsSample.sort();
console.log(stringOfCharsSample);

const listSample = new LinkedListOfNumbers();
const listData = [100, 42, -10, 13, 77, 123, 24, -55];
listData.map(num => listSample.add(num));
console.log("list before sorting:");
listSample.print();
listSample.sort();
console.log("list after sorting:");
listSample.print();
