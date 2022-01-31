// Create a function that reverses a string
// "Hi my name is Patric" should be:
// 'cirtaP si eman ym iH"
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
console.log(reverse("Hi my name is Patric"));
