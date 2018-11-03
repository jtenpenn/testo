const Tabletop = require('tabletop');
const sheet = '1fUl0gS8G14yY84_yduhjLtSc-RVmXDxvbIBP0JN5jlU';
function init() {
    Tabletop.init( { key: sheet,
        callback: showInfo,
        simpleSheet: true } );
}
window.addEventListener('DOMContentLoaded', init);
function showInfo(data) {
    // data comes through as a simple array since simpleSheet is turned on
    // alert("Successfully processed " + data.length + " row(s)!");
    document.getElementById("artist_name").innerHTML = data[0].Artist;
    document.getElementById("artist_image").src = data[0].Image;
    document.getElementById("artist_bio").innerHTML = data[0].Description;
    document.getElementById("artist_video").src =data[0].Video;


    console.log(data);
}
//document.write("The spreadsheet key is <a target='_new' href='" + public_spreadsheet_url + "'>" + sheet + "</a>");