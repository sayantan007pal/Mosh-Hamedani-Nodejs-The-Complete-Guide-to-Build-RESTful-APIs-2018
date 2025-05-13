const EventEmitter = require("events"); //EventEmitter is a class like -Human and 'E' in EventEmitter in the beginning signifies it is a "Class"

const emitter = new EventEmitter(); //event is a object like - John i.e human name
var url = 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzQbfBmrXJsDgGRCNtQfCjWKlwxH'  ;

function show(val){
    //Send an HTTP request
    console.log('message')

    //raised an event
    emitter.emit('messageLogged', {id:1, url: 'http://'})//"event arguments are stored in a object"

}
module.exports = show;