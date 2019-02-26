var axios = require("axios");
var open = require("open");
var moment = require("moment");

var artist = process.argv[2];

var bands = function (artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=a2673a52d5cc606288d8397e68d16a0e").then(
        function (response) {
            console.log(response);
        })
}

module.exports = bands(artist);

// * Name of the venue

// * Venue location

// * Date of the Event (use moment to format this as "MM/DD/YYYY")

