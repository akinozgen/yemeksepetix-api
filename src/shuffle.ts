export default function shuffle<T>(array: T[]): T[] {
  const inputArray: T[] = array;
  for (let i: number = inputArray.length - 1; i >= 0; i--) {
    const randomIndex: number = Math.floor(Math.random() * (i + 1));
    const itemAtIndex: T = inputArray[randomIndex];

    inputArray[randomIndex] = inputArray[i];
    inputArray[i] = itemAtIndex;
  }
  return inputArray;
}

// Good info: http://stackoverflow.com/questions/12802383/extending-array-in-typescript
