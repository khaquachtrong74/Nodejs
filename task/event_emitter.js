const EventEmitter = require('events')
const emitter = new EventEmitter();
emitter.on('message',(data)=>{
    console.log('message received:', data)
});

emitter.emit('message', 'hello, world!');
emitter.emit('message', 'hello, world!');
