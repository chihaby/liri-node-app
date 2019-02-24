var axios = require("axios");
var open = require("open");
var Spotify = require("node-spotify-api");
var song = process.argv[2];

var spotify = new Spotify({
    id: "***",
    secret: "***"
});

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
    })
};

module.exports = play(song);


