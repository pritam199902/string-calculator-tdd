function add(numbers = "") {
  if (numbers == "") return 0;

  // delimiters to validate
  let delimiters = /,|\n/;

  // split the numbers by delimiters
  let numberArray = numbers.split(delimiters).map(Number);

  // validate for negative numbers
  const negativeNumbers = numberArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(", ")}`
    );
  }

  // sum the numbers
  return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
