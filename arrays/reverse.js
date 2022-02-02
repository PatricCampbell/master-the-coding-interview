// Create a function that reverses a string
// "Hi my name is Patric" should be:
// 'cirtaP si eman ym iH"
var assert = require('assert');
var myString = 'Hi my name is Patric';
var reverse = function (s) {
    var reversedString = '';
    var index = s.length - 1;
    while (index >= 0) {
        var letter = s[index];
        reversedString += letter;
        index--;
    }
    return reversedString;
};
var correctReversedString = 'cirtaP si eman ym iH';
console.log(reverse(myString) === correctReversedString);
