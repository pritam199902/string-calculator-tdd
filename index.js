const add = require("./src/string-calculator");

function main() {
  const input = process.argv[2];

  if (!input) {
    console.log("Please provide a string of numbers to calculate.");
    return;
  }

  const result = add(input);
  console.log(result);
  return result;
}

main();
