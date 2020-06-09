(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    poster: 'https://via.placeholder.com/150/0000FF/808080?Text=Sintel',
    subtitles: [
        {
            srclang: 'en',
            label: 'test',
            src: 'https://raw.githubusercontent.com/andreyvit/subtitle-tools/master/sample.srt',
        }
    ],
});


    

 






},{}]},{},[1]);
