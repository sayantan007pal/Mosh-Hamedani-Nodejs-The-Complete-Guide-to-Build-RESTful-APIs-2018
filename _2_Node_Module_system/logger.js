const EventEmitter = require('events'); //EventEmitter is a class like -Human and 'E' in EventEmitter in the beginning signifies it is a "Class"

var url = 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzQbfBmrXJsDgGRCNtQfCjWKlwxH'  ;

class Logger extends EventEmitter {
    log(val){  // show(val) was giving error as --> The error TypeError: logger.log is not a function indicates that the log method is not defined on the logger object. This issue likely stems from the logger module (./logger) not exporting the log method correctly.
    //Send an HTTP request
    console.log('message')

    //raised an event
    this.emit('messageLogged', {id:1, url: 'http://'})//"event arguments are stored in a object"

    }
}

module.exports = Logger;