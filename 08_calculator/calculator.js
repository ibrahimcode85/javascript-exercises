const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function([...numbers]) {
	if (numbers.length === 0){
    return 0;

  }else if (numbers.length === 1) {
    return numbers[0];

  }else {
    let numTotal = 0;

    for (let num of numbers) {
      numTotal = numTotal + num;
    };

    return numTotal;

  };

};

const multiply = function([...numbers]) {
  if (numbers.length === 0){
    return 0;

  }else if (numbers.length === 1) {
    return numbers[0];

  }else {
    let numMultiply = 1;

    for (let num of numbers) {
      numMultiply = numMultiply * num;
    };

    return numMultiply;
    
  };
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  }else {
    numFactorial = 1;

    for (let num = 1; num <= number; num++){
      numFactorial = numFactorial * num;
    };
    return numFactorial;
  };
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
