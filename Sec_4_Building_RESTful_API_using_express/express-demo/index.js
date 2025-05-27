const Joi = require("joi");
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
    const schema =  Joi.object({         // Here, Joi.object({...}) creates a schema object that specifies the expected structure and validation rules for the request body.
        name: Joi.string().min(3).required()    //It specifies that the name field must be a string, must have at least 3 characters (min(3)), and is required (required()). If the incoming request body does not include a name property, or if the value is not a string with at least 3 characters, Joi will return a validation error. 
    });

    const result = schema.validate(req.body);    /* Here, schema.validate(req.body) checks if the data sent by the client (in req.body) matches the rules specified in the schema. The result is an object that contains two main properties:
                                                value: the validated (and possibly transformed) data
                                                error: details about any validation errors that occurred */
    // console.log(result);
/*
            INPUT
            {}
    OUTPUT
{
  value: {},
  error: [Error [ValidationError]: "name" is required] {
    _original: {},
    details: [ [Object] ]
  }
}
*/

                        // if (!req.body.name || req.body.name.length<3) //replaced by
    if (result.error) 
        {
            //400 bad request
                         // res.status(400).send('Name is required and name should me minimum 3 character') //replaced by
            
             res.status(400).send(result.error);
            /*
            INPUT
            {}
            OUTPUT
            {
                "_original": {},
                "details": [
                    {
                        "message": "\"name\" is required",
                        "path": [
                            "name"
                        ],
                        "type": "any.required",
                        "context": {
                            "label": "name",
                            "key": "name"
                        }
                    }
                ]
            }
            */
            
            
             res.status(400).send(result.error.details[0].message);  
            
            /*
            INPUT
            {}
            OUTPUT
            "name" is required 
            */


            return;

        }

    const course = {
        id : courses.length+1,
        name : req.body.name //  assigns the value from the request body's "name" property to the "name" property of the new course object.
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