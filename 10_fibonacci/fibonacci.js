const fibonacci = function(c) {
    if (c<0){return "OOPS"}
    if (c==0){return 0}
    let temp=1
    let n1=1
    let n2=1
    for (let i=3; i<=c;i++){
        temp = n1 + n2
        n1=n2
        n2=temp
    }
    return temp
};

// Do not edit below this line
module.exports = fibonacci;
