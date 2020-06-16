// Browserify converts this file to site.js

var torrentId = window.location.search.substring(1);


console.log("TORRENT ID IS: " + torrentId);
window.webtor = window.webtor || [];
window.webtor.push({
    id: 'player',
    magnet: torrentId,
    on: function(e) {
        if (e.name == window.webtor.TORRENT_FETCHED) {
            console.log('Torrent fetched!')
        }
        if (e.name == window.webtor.TORRENT_ERROR) {
            console.log('Torrent error!')
        }
    },
    poster: 'https://en.wikipedia.org/wiki/File:Jolly_Roger.svg',
    subtitles: [
        {
            srclang: 'en',
            label: 'test',
            src: 'https://raw.githubusercontent.com/andreyvit/subtitle-tools/master/sample.srt',
        }
    ],
});


    

 





