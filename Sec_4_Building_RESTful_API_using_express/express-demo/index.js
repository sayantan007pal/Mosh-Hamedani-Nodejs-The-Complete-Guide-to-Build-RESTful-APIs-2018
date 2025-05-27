const express = require("express");
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name:"course2"},
    {id: 3, name:"course3"}
]
app.get("/", (req, res)=>
{
    res.send("Hello fuckers");
});
app.get("/api/courses", (req,res)=>{
    res.send(courses);

});

app.get('/api/courses/:id', (req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("The course with a given id was not found.");
    }
    res.send(course); //http://localhost:3000/api/courses/1
});



app.post("/api/courses", (req,res)=>{
    const course = {
        id : courses.length+1,
        name : req.body.name, //  assigns the value from the request body's "name" property to the "name" property of the new course object.
    };
    courses.push(course); //The operation modifies the original courses array directly (it's a mutable operation), which means after execution, the courses array will contain all its previous elements plus this new course element at the end.
    res.send(course);
});

/*
POST    http://localhost:3000/api/courses/

input

{
    "name":"new course"
}
output

{
    "id": 4,
    "name": "new course"
}
*/ 


//dynamic PORT
const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`Listening on port ${port}`))