var axios = require("axios");
var open = require("open");
var moment = require("moment");

var artist = process.argv[2];

var bands = function (artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            //open(response);
            console.log(response);
        })
}

module.exports = bands(artist);

