const liri = require("./liri.js");
const fs = require("fs");
const text = fs.readFileSync('random.txt', 'utf8');

console.log(text);

//const textSplit = text.split(" ", 2);

// process.argv[2] = textSplit[0];
// process.argv[3] = textSplit[1];

// console.log(process.argv[2]);
// console.log(process.argv[3]);

module.exports= text;

