const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Please enter your name:`, answere => {
    console.log(`Hello ${answere}!`);
    readline.close();
  });
  