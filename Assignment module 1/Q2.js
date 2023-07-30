function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  const originalArray = [14, 37, 54, 23, 61, 48, 57, 92];
  const filteredEvenNumbers = filterEvenNumbers(originalArray);
  
  console.log("Original Array: " + (originalArray));
  console.log("Filtered Even Numbers: " + (filteredEvenNumbers));