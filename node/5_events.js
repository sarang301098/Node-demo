var events = require('events');

var emitter = new events.EventEmitter();
emitter.on('event',function(msg){
    console.log(msg);
});
emitter.emit('event','Hii You Emit an Event');

