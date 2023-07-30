function generateMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
      console.log(number + " x " + i + " = " + (number * i));
    }
  }
  
  let inputNumber = 7;
  generateMultiplicationTable(inputNumber);