var axios = require("axios");
var open = require("open");
var Spotify = require("node-spotify-api");

var spotify = new Spotify({
    id: "72bb7cf4d74b43b9bfa00623abf3b58c",
    secret: "8b37ded7ce684e418b0dd5d7ae82d03a"
});

var song = process.argv[2];

function play(song) {
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
    })
};

play(song);
