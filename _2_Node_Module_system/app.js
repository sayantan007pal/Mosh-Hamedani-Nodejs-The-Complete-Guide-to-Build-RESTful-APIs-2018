const EventEmitter = require("events"); //EventEmitter is a class like -Human and 'E' in EventEmitter in the beginning signifies it is a "Class"

const emitter = new EventEmitter(); //event is a object like - John i.e human name


//register a listener
emitter.on('messageLogged', function(){
    console.log("Listener called ");
})//emitter.addListener('Name of event','Callback function or Listener') same as emitter.on()

//raised an event
emitter.emit('messageLogged')// here .event signifies a noise that something has happened where 'messageLogged' is the name of the event
