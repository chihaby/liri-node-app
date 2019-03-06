require("dotenv").config();
var keys = require("./keys.js");
var fs = require('fs');
var moment = require("moment")
var doIt = require("./do-what-it-says"); 

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
        
    //takes in a command from a text file (random.txt)
    case "do-what-it-says":
        const str = require("./do-what-it-says.js");
        const strSplit = str.split(" ", 2);
        process.argv[2] = strSplit[0];
        process.argv[3] = strSplit[1];
        let textCommand = require("./spotify.js");     
        break;

    default:
        console.log("Command Not Found");
}

var text = fs.appendFile("log.txt", JSON.stringify(command + " " + process.argv.slice(3).join(' ')) + " " + moment().format('MMMM Do YYYY, h:mm:ss a') + "\n", function (err) {
    if (err) {
        console.log('err', err);
    }
    console.log("------------------------------");
    console.log('Log file updated');
    console.log("------------------------------");
})
