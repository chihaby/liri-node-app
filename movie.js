var axios = require("axios");
var open = require("open");
var movieName = process.argv[2];

var movie = function (movieName) {
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&apikey=6911befb").then(
        function (response) {
            open(response.data.Poster);
            if (!response.data.Poster) {
                console.log("Poster not available");
            }
            console.log(response.data.Year);
            console.log(response.data.imdbRating);
        })
}

module.exports = movie(movieName);


