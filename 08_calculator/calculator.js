const add = function(num1,num2) {
  return num1+num2
};

const subtract = function(num1,num2) {
  return num1-num2
	
};

const sum = function(array) {
  let total=0
  for(let i=0; i<array.length;i++){
    total+=array[i]
  }
  return total
	
};

const multiply = function(array) {
  let total=1
  if (array.length == 0){
    return 0
  }
  for(let i=0; i<array.length;i++){
    total*=array[i]
  }
  return total

};

const power = function(num1,pow) {
  let total = num1
  for (let i = 1; i<pow; i++){
    total*=num1
  }
    return total
	
};

const factorial = function(num) {
  let total = 1
  for (num; num>0;num--){
    total*= num
  }
  return total
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
