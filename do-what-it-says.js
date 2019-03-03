const fs = require("fs");
const text = fs.readFileSync('random.txt', 'utf8');
const play = require("./spotify.js");

console.log(text);

const textSplit = text.split(" ", 2);

process.argv[2] = textSplit[0];
process.argv[3] = textSplit[1];


module.exports = play(I - want - it - that - way);