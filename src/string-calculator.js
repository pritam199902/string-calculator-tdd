function add(numbers = "") {
  if (!numbers || numbers?.length == 0) return 0;

  let nums = numbers;

  // delimiters to validate
  let delimiters = /,|\n/;

  // validate for custom delimiter
  if (nums.startsWith("//")) {
    const firstNewLine = nums.indexOf("\\n");

    if (firstNewLine === -1) {
      throw new Error("Invalid custom delimiter format");
    }

    const customDelimiter = nums.substring(2, firstNewLine);
    nums = nums.substring(firstNewLine + 2);
    delimiters = new RegExp(`${customDelimiter}`);
  }

  // split the nums by delimiters
  let numberArray = nums.split(delimiters).map(Number);

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
