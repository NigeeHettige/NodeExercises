const EventEmitter = require('events');
const emitter = new EventEmitter();




//Raise an event
// emitter.emit('messageLogged',{id:1,url:'http://'});

//Raise:logging(data:message)
const Logger = require('./second');
const logger = new Logger();


//Register a listner
logger.on('messageLogged', function(arg){
    console.log('listner called',arg);
});

logger.log('message');