console.log(__filename)  // file's path from where it is imported
console.log(__dirname) //  the file's path on which the import is done
var url = 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzQbfBmrXJsDgGRCNtQfCjWKlwxH'  ;

function show(val){
    console.log('message')
}
module.exports.endpoint = url;
module.exports.func = show;