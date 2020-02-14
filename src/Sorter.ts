import { ArrayOfNumbers } from "./ArrayOfNumbers";

interface Sortable {
  length: number;
  leftIsBigger(left: number, right: number): boolean;
  swap(left: number, right: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.leftIsBigger(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
