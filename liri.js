require("dotenv").config();
var keys = require("./keys.js");

//var play = require("./spotify.js");

var command = process.argv[2];

switch(command) {
    case "spotify-this-song":
        var play = require("./spotify.js");
    break;
    case "search-movie":
        var movie = require("./movies.js");
    break;
    default:
    console.log("command not found");
}

// function select (command){   
//     if (command = "spotify-this-song"){
//         console.log("command correct");
//         var play = require("./spotify.js");
//     }
//     if (command = "search-movie"){
//         console.log("command correct");
//         var movie = require("./movies.js");
//     }
//     console.log("command not found");
// }
// select();




// var movie = require("./movies.js");
// var bands = require("./bands.js");




//play;