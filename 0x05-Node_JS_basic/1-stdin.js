const readline = require('readline');

/**
 * Prompt the user for their name interactively using readline.
 */
function promptUser() {
  // Create an interface for reading from and writing to the console
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Ask the user for their name
  rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
    // Display the result and close the interface
    displayResult(name);
    rl.close();
  });

  // Handle program termination when the interface is closed
  rl.on('close', () => {
    process.exit(0);
  });
}

/**
 * Display the result, including the entered name, and a closing message.
 * @param {string} name - The user's name.
 */
function displayResult(name) {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
}

// Check if input is coming from a TTY (terminal)
if (process.stdin.isTTY) {
  // If interactive input, prompt the user
  promptUser();
} else {
  // If piped input, read asynchronously and process on 'end' event
  let inputData = '';

  // Handle piped input
  process.stdin.on('data', (data) => {
    inputData += data;
  });

  process.stdin.on('end', () => {
    // Trim the input and display the result
    const name = inputData.trim();
    displayResult(name);
  });
}
