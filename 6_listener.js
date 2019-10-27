var events = require('events');
var eventEmitter = new events.EventEmitter();
var listener1 = function listener1() {
	console.log('listener#1 execute');
}
var listener2 = function listener2() {
	console.log('listener#2 execute');
}
var listener3 = function listener3() {
	console.log('once listener#3 execute');
}
var errHandler = function errHandler() {
	console.log('error happens');
}

eventEmitter.addListener('connect', listener1);
eventEmitter.on('connect', listener2);
eventEmitter.once('connect', listener3);

var eventListeners = eventEmitter.listenerCount('connect');
console.log('there are ' + eventListeners + ' listeners');

eventEmitter.emit('connect');

var eventListeners = eventEmitter.listenerCount('connect');
console.log('there are ' + eventListeners + ' listeners left');

eventEmitter.removeListener('connect', listener1);
console.log('listener#1 removed');
eventEmitter.emit('connect');

var eventListeners = eventEmitter.listenerCount('connect');
console.log('there are ' + eventListeners + ' listeners left');

eventEmitter.removeAllListeners('connect');
console.log('All listeners removed');
eventEmitter.emit('connect');

var eventListeners = eventEmitter.listenerCount('connect');
console.log('there are ' + eventListeners + ' listeners left');

console.log('event "error" must be handled:');
// comment out the following line to check unhandled error
eventEmitter.on('error', errHandler);
eventEmitter.emit('error');

// most class objects have EventEmitter inheritated by default
// such as fs, net, and http
