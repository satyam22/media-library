var express = require('express');
var chalk = require('chalk');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');


var port = process.env.PORT || 3001;
var Student = require('./model/Student.js');



var app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', express.static(path.join(__dirname, 'src/btadmin/public')));

app.set("jwt_secret_key", "studentportal123");

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
})


router.get('/', function (req, res) {
    res.json({ mesage: 'API initialized' });
})
app.use('/api', router);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/StudentPortal", { useMongoClient: true });

router.post('/login', function (req, res) {
    console.log("==========inside login function==========");
    console.log(req.body);
    Student.authenticateUser(req.body.username, req.body.password, function (err, data) {
        if (err) {
            res.status(err.status || 401).json({ succes: false, message: 'invalid authentication details' });
        }
        else {
            console.log("=====data======");
            console.log(data);
            const payload = {
                userid: data._id
            }
            const token = jwt.sign(payload, app.get("jwt_secret_key"), {
                expiresIn: 60 * 60 * 24
            });
            res.json({
                token: token,
                message: "Save this token. Use it to access protrected resources"
            })
        }
    })
})
router.post('/register', function (req, res) {
console.log("=============register request body=========");
console.log(req.body);
    var student = new Student(req.body.register_fields);
    student.save(function (err) {
        if (err) {
            chalk.red(console.log(err));
            res.status(err.status || 400).json({ success: false, message: "Registration failed due to bad request", error: err.toString() })
        }
        else {
            res.status(200).json({ success: true, message: "You have registered successfully" });
        }
    })
    //console.log(req.body);

})

router.post('/checkMail', function (req, res) {
    Student.find({ emailid: req.body.email }, function (err, user) {
        //   console.log("inside find");
        if (err) {
            console.log("database error");
            res.send("Error Occured");
        }
        //     console.log(user);
        if (user.length != 0) {
            res.send("Email id already exists");
        }
    })
})
router.post('/checkPhone', function (req, res) {
    Student.find({ phoneno: req.body.phoneno }, function (err, user) {
        //        console.log("inside find");
        if (err) {
            console.log("database error");
            res.send("Error Occured");
        }
        //      console.log(user);
        if (user.length != 0) {
            res.send("Phone No already exists");
        }
    })
})
// router.use(function(req,res,next){
//     console.log("inside check");
//     const token=req.body.token||req.query.token||req.headers['x-access-token'];
//     if(token){
//         jwt.verify(token,app.get("jwt_secret_key"),function(err,decoded){
//             if(err){
//                 res.status(err.status||401).json({succes:false,message:"invalid token passed"});
//                 res.end();
//             }
//             else{
//                 console.log("=======decoded=======");
//                 console.log(decoded);
//                 req.decoded=decoded;
//                 next();
//             }
//         })
//     }
//     else{
//         res.status(403).json({succes:false,message:"No token provided.Please provide valid token along with request"});
//     }
// })
router.get('/portal', function (req, res) {
    res.send("Successfully Logged in");
})



app.listen(port, function () {
    chalk.green(console.log("server is listening at PORT: " + port));
})