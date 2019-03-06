var axios = require("axios");
var open = require("open");
var movieName = process.argv[3];

var movie = function (movieName) {
    
    // if(movieName === ""){
    //     movieName === "mr noboby";
    // }
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&apikey=6911befb").then(
        function (response) {
            console.log("------------------------------");
            console.log("Title" + response.data.Title);
            console.log("Year" + response.data.Year);
            console.log("imdbRating " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);  
            console.log("------------------------------");     
        })
        
}

module.exports = movie(movieName);


