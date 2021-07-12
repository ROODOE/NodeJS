let path = require('path');
let fs = require('fs');
let request = require('request');

let chirpArr = [{handle: '1', message: 'blah'}, {handle: '2', message: 'blahblah'}, {handle: '3', message: 'blahblahblah'}, {handle: '4', message: 'blahblahblahblah'}, {handle: '5', message: 'blahblahblahblahblah'}]




fs.writeFile('chirps.json', JSON.stringify(chirpArr), function(err) {
    if(err) throw err;
    console.log('Here!');
})

fs.readFile('chirps.json', function(err, res) {
    if(err) throw err;
    console.log(JSON.parse(res));
})



