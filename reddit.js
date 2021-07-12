const rp = require("request-promise");
let path = require('path');
let fs = require('fs');


rp("https://reddit.com/r/popular.json")
.then(function(info) {
    return JSON.parse(info)
})
.then(function(data) {
    console.log(data.data.title);
})
.catch(function(err) {
    console.log(err);
})