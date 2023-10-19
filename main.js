// console.log(module);


// This is as a object

// const logger = require('./second');
// console.log(logger);

// logger.log('hello');



// As a function
const log = require('./second');
log('hello');


//Build in module

//path
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

//OS
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total Memory: '+totalMemory);
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

//File system

const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);
