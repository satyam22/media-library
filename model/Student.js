var mongoose=require('mongoose');

var StudentSchema=mongoose.Schema({
    fname:{type:String,required:true},
    mname:String,
    lname:String,
    fathername:{type:String,required:true},
    dob:{type:Date,required:true},
    age:{type:Number,required:true},
    gender:{type:String,enum:['Male','Female','Transgender'],required:true},
    address:{type:String,required:true},
    state:{type:String,required:true},
    city:{type:String,required:true},
    zipcode:{type:String,required:true},
    phoneno:{type:Number,require:true,unique:true},
    emailid:{type:String,required:true,unique:true},
    username:{type:String,unique:true},
    password:{type:String},
    active:Boolean
});
function getyymmdd(date){
    var mm=date.getMonth()+1;
    var dd=date.getDate();
    return [date.getFullYear(),(mm>9?'':'0')+mm,(dd>9?'':'0')+dd].join('');
}
StudentSchema.pre('save',function(next){
    this.active=false;
    this.username=this.emailid;
    this.password=getyymmdd(this.dob);
    console.log("USER NAME: "+this.username);
    console.log("PASS: "+this.password);
console.log("inside pre save method");
console.log("EMAIL ID: "+this.emailid);
next();
});

StudentSchema.statics.authenticateUser=function(username,password,callback){
    console.log("inside  ");
    console.log("USER NAME: "+username);
    console.log("PASSWORD: "+password);
    this.findOne({"username":username},function(err,user){
        if(err){
            return callback(err);
        }
        else if(!user){
            var err=new Error("username not found");
            err.status=401;
            err.name="111";
            return callback(err);
        } 
        else if(password!==user.password){
            var err=new Error("Bad credentials.password doesn't match with given username.");
            err.status=401;
            err.name="111";
            return callback(err);
        }
        return callback(null,user);
    })
}
var Student=mongoose.model('Student',StudentSchema);
module.exports=Student;
