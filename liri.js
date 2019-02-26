require("dotenv").config();
var keys = require("./keys.js");

var command = process.argv[2];

// executing the value of the CLI
switch(command) {

    case "spotify-this-song":
        var play = require("./spotify.js");
    break;

    case "movie-this":
        var movie = require("./movies.js");
    break;

    case "concert-this":
    var movie = require("./bands.js");
    break;

    default:
    console.log("command not found");
}

