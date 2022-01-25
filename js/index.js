// Iteration 1: Names and Input
let hacker1 = 'Julia';
console.log(`The driver's name is ${hacker1} `);
let hacker2 = 'Oliver';
console.log(`The navigator's name is ${hacker2} `);

// Iteration 2: Conditionals
const sum1 = hacker1.length;
const sum2 = hacker2.length;

if (sum1 > sum2) {
  console.log(`The driver has the longest name, it has ${sum1} characters.`);
} else if (sum2 > sum1) {
  console.log(
    `It seems that the navigator has the longest name, it has ${sum2} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${sum1} characters!`);
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
console.log(hacker1.toUpperCase().split('').join(' ').replace(/\s+/g, ' '));

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
console.log(hacker2.split('').reverse().join(''));

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (hacker1 > hacker2) {
  console.log(`${hacker1} goes first.`);
} else if (hacker1 < hacker2) {
  console.log(`Yo, ${hacker2} goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}
