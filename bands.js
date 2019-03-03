var axios = require("axios");
var open = require("open");
var fs = require('fs');
var moment = require("moment");

var artist = process.argv.slice(3).join(' ');

var bands = function (artist) {
    console.log("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=a2673a52d5cc606288d8397e68d16a0e");
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=a2673a52d5cc606288d8397e68d16a0e").then(
        function (response) {
            fs.writeFile("response.txt", JSON.stringify(response.data), function (err) {
                if (err) {
                    console.log('err', err);
                }
                console.log('file written');
            })

            // * Name of the venue
            // * Venue location
            // * Date of the Event (use moment to format this as "MM/DD/YYYY")
            for (var i = 0; i < response.data.length; i++) {
                console.log(response.data[i].venue.name);
                console.log(response.data[i].venue.city + ", " + response.data[i].venue.region + ". " + response.data[i].venue.country);
                console.log(moment(response.data[i].datetime).format("MM/DD/YYYY"));
                console.log("------------------------------\n")
            }
        })
}

module.exports = bands(artist);


