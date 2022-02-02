// Create a function that reverses a string
// "Hi my name is Patric" should be:
// 'cirtaP si eman ym iH"

const assert = require('assert');

const myString: string = 'Hi my name is Patric';

const reverse = (s: string): string => {
  let reversedString = '';
  let index = s.length - 1;

  while (index >= 0) {
    const letter = s[index];

    reversedString += letter;

    index--;
  }

  return reversedString;
};

const correctReversedString: string = 'cirtaP si eman ym iH';

console.log(reverse(myString) === correctReversedString);
