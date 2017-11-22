var express=require('express');
var chalk=require('chalk');
var path=require('path');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');



var port=process.env.PORT||8080;
var Student=require('./btadmin/models/Student.js');



var app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'btadmin')));
app.use('/stylesheets',express.static(path.join(__dirname,'btadmin/stylesheets')));
app.use('/js',express.static(path.join(__dirname,'btadmin/js')));
// app.get('/register',function(req,res){
//     res.sendFile()
// })


mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/StudentPortal",{useMongoClient:true});
app.post('/register',function(req,res){
var student=new Student(req.body);
student.save(function(err){
    if(err){
        chalk.red(console.log(err));
        res.send("error occured in registration");        
    }
    res.send("You have registered successfully");
})
console.log(req.body);

})
app.listen(port,function(){
chalk.green(console.log("server is listening at PORT: "+port));
})