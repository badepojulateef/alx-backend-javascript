process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('name', (name) => {
  console.log(`Your name is : ${name.toString()}`);
  process.exit();
});
