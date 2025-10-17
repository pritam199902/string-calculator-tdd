function add(numbers = "") {
  if (numbers == "") return 0;

  // delimiters to validate as regxp
  const delimiters = /,|\n/;

  // split the numbers by delimiters
  let numberArray = numbers.split(delimiters).map(Number);

  // sum the numbers
  return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
