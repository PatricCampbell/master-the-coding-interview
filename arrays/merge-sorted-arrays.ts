// Given two sorted arrays of integers, merge them into one

const firstArray = [2, 4, 8, 14, 22];
const secondArray = [1, 5, 13, 25];

const mergeSortedArrays = (arrayOne: number[], arrayTwo: number[]): number[] => {
  let sortedArray: number[] = [];
  let keepSearching = false;

  arrayOne.forEach(num => {
    let firstNumArrayTwo = arrayTwo[0];

    if (num < firstNumArrayTwo) {
      sortedArray.push(num);
    } else {
      keepSearching = true;

      while (keepSearching) {
        if (num < firstNumArrayTwo) {
          sortedArray.push(num);
          keepSearching = false;
        } else {
          sortedArray.push(firstNumArrayTwo);
          arrayTwo.shift();
          firstNumArrayTwo = arrayTwo[0];
        }
      }
    }
  });;
  sortedArray = sortedArray.concat(arrayTwo);

  return sortedArray;
}

const correctlySortedArray = [1, 2, 4, 5, 8, 13, 14, 22, 25];

console.log(`${mergeSortedArrays(firstArray, secondArray)} should equal ${correctlySortedArray}`);
