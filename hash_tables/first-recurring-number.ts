// Given an array of integers, find the first recurring number

const firstRecurringNumber = (arr: number[]): number | null => {
  const seenNumbers: { [index: number]: boolean } = {};
  let firstRecurring: number | null = null;

  arr.forEach(num => {
    if (seenNumbers[num] && firstRecurring === null) {
      firstRecurring = num;
    } else {
      seenNumbers[num] = true;
    }
  });

  return firstRecurring;
}

const numbersArray = [2, 5, 1, 2, 3, 5, 1, 2, 4];

console.log(firstRecurringNumber(numbersArray));
