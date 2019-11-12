const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const expressValidator = require('express-validator');
const cors = require('cors')





//mongoose connection to db
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB Connected'));
let db = mongoose.connection;
db.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});



//setting up schema
let Schema = new mongoose.Schema({
    id: Number,
    name: String

});



//model created
let dbdata = mongoose.model('profiles', Schema);



// var corsOptions = {
//     origin: 'http://localhost/3000'
//   }

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



//get request
app.get("/",cors(), async (req, res) => {
    // let value = await dbdata.find();
    // res.json({value});
    res.json(await dbdata.find());
});



//port
const port = 3000;
app.listen(port, () => console.log("app listening at port " + port + ""));