export abstract class Sorter {
  abstract length: number;
  abstract leftIsBigger(left: number, right: number): boolean;
  abstract swap(left: number, right: number): void;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.leftIsBigger(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
