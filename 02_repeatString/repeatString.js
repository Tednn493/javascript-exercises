const repeatString = function(word, times) {
    if (times<0) return "ERROR";
    let i=0
    let message=''
    while (i < times){
        i++
        message+=word
    };  
    return message;
};

// Do not edit below this line
module.exports = repeatString;
