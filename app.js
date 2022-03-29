const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// const bodyParser = require('body-parser');

const api = require("./api");

const app = express();

app.use(cors());

// app.use(express.json())

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.use("/api/v1/superheroes", api.superheroes);


app.use((req, res)=>{
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found"
    });
});

app.use((error, _, res, __)=>{
    const {code = 500, message = "Server error"} = error;
    res.status(code).json({
        status: "fail",
        code,
        message
    })
});

const {DB_HOST, PORT = 4000} = process.env;

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, ()=> {
        console.log("Server is working on port " , PORT)
   });
})
.catch(error => console.log(error));


