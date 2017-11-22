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
    emailid:{type:String,required:true,unique:true}
});

var Student=mongoose.model('Student',StudentSchema);
module.exports=Student;
