const palindromes = function (string) {
    var punctuation = /[,?!.;: ]/g;
    string = string.replace(punctuation, "");
    string= string.toLowerCase()
    let array = string.split("").reverse();
    let reverseString=array.join("")


    return string==reverseString
};

// Do not edit below this line
module.exports = palindromes;
