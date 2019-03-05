var keys = require("./keys.js");
var axios = require("axios");
var open = require("open");
var Spotify = require("node-spotify-api");

var song = process.argv.slice(3).join(' ');

var spotify = new Spotify(keys.spotify);

var play = function (song) {

    spotify.search({ type: 'track', query: song }, function (err, data) {
        
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        let songInfo = data.tracks.items[0];
        let artist = songInfo.artists[0].name;
        let preview = songInfo.preview_url;

        // if (!song) {
        //     data.tracks.items[0].name === "all that she wants";
        //     artist === "ace of base";
        //     open(preview)
        // }

        console.log("Artist: " + artist);
        console.log("Song: " + songInfo.name);
        console.log("Album: " + songInfo.album.name);
        console.log("------------------------------\n")

        open(preview);

        //If not found song defaults to "The Sign" by Ace Of Base

    })
};

module.exports = play(song);


