const EventEmitter = require("events"); //EventEmitter is a class like -Human and 'E' in EventEmitter in the beginning signifies it is a "Class"

const emitter = new EventEmitter(); //event is a object like - John i.e human name


//register a listener
emitter.on('messageLogged', function(){
    console.log("Listener called ");  //"Listener called " output signifies when " emitter.emit('messageLogged', {id:1, url: 'http://'}) " this event is raised , " emitter.on('messageLogged', function() " this callback function is called
})//emitter.addListener('Name of event','Callback function or Listener') same as emitter.on()

//raised an event
emitter.emit('messageLogged', {id:1, url: 'http://'})//"event arguments are stored in a object"