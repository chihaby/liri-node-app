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
            console.log(response.data[0].venue.name);
        })
}

module.exports = bands(artist);

// * Name of the venue

// * Venue location

// * Date of the Event (use moment to format this as "MM/DD/YYYY")

