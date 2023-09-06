const removeFromArray = function(arrays, ...args) { 
    for (const target of args){
        let index=arrays.indexOf(target);
        if (index!==-1){
            arrays.splice(index,1)
        }
    };
    return arrays
    
};

// Do not edit below this line
module.exports = removeFromArray;
