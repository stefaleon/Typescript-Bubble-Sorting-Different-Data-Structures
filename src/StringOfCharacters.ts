import { Sorter } from "./Sorter";

export class StringOfCharacters extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  leftIsBigger(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const arrayOfCharacters = this.data.split("");
    const temp = arrayOfCharacters[leftIndex];
    arrayOfCharacters[leftIndex] = arrayOfCharacters[rightIndex];
    arrayOfCharacters[rightIndex] = temp;
    this.data = arrayOfCharacters.join("");
  }
}
