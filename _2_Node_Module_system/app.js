const EventEmitter = require("events"); //EventEmitter is a class like -Human and 'E' in EventEmitter in the beginning signifies it is a "Class"

const emitter = new EventEmitter(); //event is a object like - John i.e human name


//register a listener
emitter.on('messageLogged', (arg)=>{
    console.log("Listener called ", arg);  //"Listener called " output signifies when " emitter.emit('messageLogged', {id:1, url: 'http://'}) " this event is raised , " emitter.on('messageLogged', function() " this callback function is called
})//emitter.addListener('Name of event','Callback function or Listener') same as emitter.on()


/*
but here in this case the event listner above was not called since we are calling event listner from logger.js file

*/


const log = require("./logger");
// log(); //no output
log();      //message
log("messag");  //message