// Given two sorted arrays of integers, merge them into one
var firstArray = [2, 4, 8, 14, 22];
var secondArray = [1, 5, 13, 25];
var mergeSortedArrays = function (arrayOne, arrayTwo) {
    var sortedArray = [];
    var keepSearching = false;
    arrayOne.forEach(function (num) {
        var firstNumArrayTwo = arrayTwo[0];
        if (num < firstNumArrayTwo) {
            sortedArray.push(num);
        }
        else {
            keepSearching = true;
            while (keepSearching) {
                if (num < firstNumArrayTwo) {
                    sortedArray.push(num);
                    keepSearching = false;
                }
                else {
                    sortedArray.push(firstNumArrayTwo);
                    arrayTwo.shift();
                    firstNumArrayTwo = arrayTwo[0];
                }
            }
        }
    });
    ;
    sortedArray = sortedArray.concat(arrayTwo);
    return sortedArray;
};
var correctlySortedArray = [1, 2, 4, 5, 8, 13, 14, 22, 25];
console.log("".concat(mergeSortedArrays(firstArray, secondArray), " should equal ").concat(correctlySortedArray));
