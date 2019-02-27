require("dotenv").config();
var keys = require("./keys.js");

var command = process.argv[2];

// executing the value of the CLI
switch (command) {

    case "spotify-this-song":
        const play = require("./spotify.js");
        break;

    case "movie-this":
        const movie = require("./movies.js");
        break;

    case "concert-this":
        const bands = require("./bands.js");
        break;

    case "do-what-it-says":
        const fs = require("fs");
        const text = fs.readFileSync('random.txt','utf8');
        const textSplit = text.split(" ", 2);
        var command = textSplit[0];
        textSplit[1] = process.argv[3];
        const replay = require("./spotify.js"); 
        console.log(text.split); 
        break;

    default:
        console.log("command not found");
}

