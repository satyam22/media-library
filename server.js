var express = require('express');
var chalk = require('chalk');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



var port = process.env.PORT || 3001;
//var Student = require('./models/Student.js');



var app = express();
var router=express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Credentials','true');
    res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Access-Control-Allow-Headers,Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers');
    res.setHeader('Cache-Control','no-cache');
    next();
})

app.use('/api',router);
router.get('/',function(req,res){
    res.json({mesage:'API initialized'});
})

// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/StudentPortal", { useMongoClient: true });

// app.post('/login',function(req,res){
//     Student.authenticateUser(req.body.username,req.body.password,function(err,data){
//         if(err){
//         res.send(err);
//         }
//         else{
//             res.redirect('/portal');
//         }
//     })
// })
// app.get('/portal',function(req,res){
//     res.send("Successfully Logged in");
// })
// app.post('/register', function (req, res) {

//     var student = new Student(req.body);
//     student.save(function (err) {
//         if (err) {
//             chalk.red(console.log(err));
//             return res.send("error occured in registration");
//         }
//         return res.send("You have registered successfully");
//     })
//     console.log(req.body);

// })

// app.post('/checkMail', function (req, res) {
//     Student.find({ emailid: req.body.email }, function (err, user) {
//         console.log("inside find");
//         if (err) {
//             console.log("database error");
//             res.send("Error Occured");
//         }
//         console.log(user);
//         if (user.length != 0) {
//             res.send("Email id already exists");
//         }
//     })
// })
// app.post('/checkPhone', function (req, res) {
//     Student.find({ phoneno: req.body.phoneno }, function (err, user) {
//         console.log("inside find");
//         if (err) {
//             console.log("database error");
//             res.send("Error Occured");
//         }
//         console.log(user);
//         if (user.length != 0) {
//             res.send("Phone No already exists");
//         }
//     })
// })
app.listen(port, function () {
    chalk.green(console.log("server is listening at PORT: " + port));
})