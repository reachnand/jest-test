const add = (x, y) => {
    return x + y;
  };
  
  const subtract = (x, y) => {
    return x - y;
  };
  
  const multiply = (num1,num2) => {
    return num1 * num2;
  };
  
  const divide = (x, y) => {
    if (y===0) {
      throw "cannot divide by 0";
    }
    return x / y;
  };

  const isNull = () => {
  return null;
  }

  const equals = (x, y) => {
    if (x===y) {
      throw "They are equal";
    }
    return x,y;
  };

  const decimal = (x, y) => {
    return x / y;
  };

  const clearAllfields = ()=>{
      return 0;
  }
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    isNull,
    equals,
    decimal,
    clearAllfields
  };