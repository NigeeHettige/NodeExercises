const EventEmitter = require('events');


var url = 'http://mylogger.io/log';


class Logger extends EventEmitter{
    log(message){
        //send HTTP request
        console.log(message);


        //Raise an event
        this.emit('messageLogged',{id:1,url:'http://'});
    }
}




// This is as a object
// module.exports.log = log;

//As a function
module.exports = Logger;

// if you want to export url
// module.exports.url = url;
