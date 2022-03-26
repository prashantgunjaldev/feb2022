let events = require('events');

let eventEmitter = new events.EventEmitter();

eventEmitter.on('call',(data)=>{
    console.log("Someone is calling");
});


eventEmitter.emit('call',{data:"test"});
eventEmitter.emit('call');
eventEmitter.emit('call');