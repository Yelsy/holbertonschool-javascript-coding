console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (name) => {
  process.stdout.write(`Your name is: ${name}`);
  process.stdin.end();
});
process.on('exit', () => {
  console.log('This important software is now closing');
});
