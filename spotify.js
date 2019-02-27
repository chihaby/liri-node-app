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

        var songInfo = data.tracks.items[0];
        var artist = songInfo.artists[0].name;
        var preview = songInfo.preview_url;

        console.log("Artist: " + artist);
        console.log("Song: " + songInfo.name);
        console.log("Album: " + songInfo.album.name);

        open(preview);

        // If not found song defaults to "The Sign" by Ace Of Base
        // if(preview === undefined){    
        //     open(song-url);
        // }
    })
};

module.exports = play(song);


