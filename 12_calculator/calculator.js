const add = function(a,b) {
  return a+b;
	//return n.reduce((acc,currentValue)=> acc + currentValue,0);
};

const subtract = function(a,b) {
  return a-b;
	//return n.reduce((acc,currentValue)=> acc - currentValue,0);
};

const sum = function(arr) {
	return arr.reduce((acc , currValue) => acc + currValue ,0);
};

const multiply = function(arr) {
  return arr.reduce((acc, currValue) => acc * currValue ,1);

};

const power = function(base,expo) {
	return base **expo;
};

const factorial = function(a) {
  let total=1;
  for(let i=2; i<=a; i++)
    {
      total*=i;
    }
  return total;  
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
