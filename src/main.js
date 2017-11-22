var express=require('express');
var chalk=require('chalk');
var path=require('path');
var port=process.env.PORT||8080;
var app=express();


app.use('/stylesheets',express.static(path.join(__dirname,'btadmin/stylesheets')));
app.use('/js',express.static(path,join(__dirname,'btadmin/js')));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/btadmin/index.html');
});


app.listen(port,function(){
chalk.green(console.log("server is listening at PORT: "+port));
})