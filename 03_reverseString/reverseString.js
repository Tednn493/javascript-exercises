const reverseString = function(phrase) {
    let message = "";
    let index = (phrase.length - 1);
    while (index> -1){
        message+=phrase[index]
        index--
    };
    return message

};

// Do not edit below this line
module.exports = reverseString;
