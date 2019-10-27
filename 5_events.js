var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() { // step 2
	console.log('connected')
	eventEmitter.emit('data_received');
}

eventEmitter.on('connect',connectHandler); // step 1
eventEmitter.on('data_received',function() { // step 3
	console.log('data received');
});

eventEmitter.emit('connect'); // start from here
console.log("the end"); // step 4
