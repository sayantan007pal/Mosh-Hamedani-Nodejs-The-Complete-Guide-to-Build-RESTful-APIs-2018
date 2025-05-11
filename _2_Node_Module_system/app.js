const fs = require("fs");

fs.readdir('./',function(err, files) { // always use asynchronous method as node is single threaded so on using "readdirSync" the process would be blocking the other operations untill it completes 
    if (err) {console.log('ERROR', err); return;}
    else {
        console.log("NAME OF FILES ARE : ", files);
    }
})