const express = require("express");
const app = express();

app.get("/", (req, res)=>
{
    res.send("Hello fuckers");
});
app.get("/api/courses", (req,res)=>{
    res.send([1,2,3,4]);

});

app.get('/api/courses/:id', (req,res) =>{
    res.send(req.params.id);  //http://localhost:3000/api/courses/300
});


app.get('/api/courses/:year/:month', (req, res) =>{
    res.send(req.params); //http://localhost:3000/api/courses/2035/1
});

app.get('/api/posts/:year/:month', (req, res) =>{
    res.send(req.query); //http://localhost:3000/api/posts/2035/1?sortBy=name
});

//dynamic PORT
const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`Listening on port ${port}`))