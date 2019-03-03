require("dotenv").config();
var keys = require("./keys.js");
var fs = require('fs');
var moment = require("moment")

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
        const text = require("./do-what-it-says")
        break;

    default:
        console.log("Command Not Found");
}

var text = fs.appendFile("log.txt", JSON.stringify(command + " " + process.argv.slice(3).join(' ')) + " " + moment().format('MMMM Do YYYY, h:mm:ss a') + "\n", function (err) {
    if (err) {
        console.log('err', err);
    }
    console.log('Log file updated');
})
