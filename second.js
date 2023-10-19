var url = 'http://mylogger.io/log';

function log(message){
    //send HTTP request
    console.log(message);
}


// This is as a object
// module.exports.log = log;

//As a function
module.exports = log;

// if you want to export url
// module.exports.url = url;