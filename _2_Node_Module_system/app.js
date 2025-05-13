const EventEmitter = require('events'); //EventEmitter is a class like -Human and 'E' in EventEmitter in the beginning signifies it is a "Class"






const Logger = require("./logger");
const logger = new Logger();


//register a listener
logger.on('messageLogged', (arg)=>{
    console.log("Listener called ", arg);  //"Listener called " output signifies when " emitter.emit('messageLogged', {id:1, url: 'http://'}) " this event is raised , " emitter.on('messageLogged', function() " this callback function is called
})//emitter.addListener('Name of event','Callback function or Listener') same as emitter.on()




logger.log();      //message   Listener called  { id: 1, url: 'http://' }
logger.log('mgdsrt');  //message    Listener called  { id: 1, url: 'http://' }