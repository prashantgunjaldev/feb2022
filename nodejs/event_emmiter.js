let events = require('events');

let eventEmitter = new events.EventEmitter();

eventEmitter.on('call',()=>{
    console.log("Someone is calling");
});


eventEmitter.emit('call');
eventEmitter.emit('call');
eventEmitter.emit('call');