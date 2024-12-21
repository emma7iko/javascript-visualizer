const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for the first number
rl.question('Please enter the first number: ', (firstNumber) => {
  // Prompt the user for the second number
  rl.question('Please enter the second number: ', (secondNumber) => {
    // Convert the input to numbers and add them
    const sum = Number(firstNumber) + Number(secondNumber);

    // Display the result
    console.log(`The sum of the two numbers is: ${sum}`);

    // Close the readline interface
    rl.close();
  });
});
