// Given an array of integers, find the first recurring number
var firstRecurringNumber = function (arr) {
    var seenNumbers = {};
    var firstRecurring = null;
    arr.forEach(function (num) {
        if (seenNumbers[num] && firstRecurring === null) {
            firstRecurring = num;
        }
        else {
            seenNumbers[num] = true;
        }
    });
    return firstRecurring;
};
var numbersArray = [2, 5, 1, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringNumber(numbersArray));
