const http = require("http");
const server = http.createServer((req, res) =>{
    if(req.url ==='/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url ==='/api'){
        res.write(JSON.stringify([1,3,5,7,94,200])); // would return json response in the form of string
        res.end();
    }
});  // this server has all the capabilities of a event emitter

//event handler
server.on('connection', (socket) => {
    console.log("New connection ....");
});
server.listen(3001)

console.log("Listening on port 3001");


