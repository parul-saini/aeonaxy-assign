import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    name:{
     type: String,
     required:true,
    },
    userName:{
     type: String,
     required:true,
     unique:true,
     min:3,
    },
    email:{
        type: String,
        required:true ,
        unique:true ,
        lowercase :true,
        trim:true ,
    },
    password:{
        type: String,
        required:true ,
    },
    verified:{
        type: Boolean,
        default:false
    }
},{timeStamp:true});

userSchema.pre("save",async function(next){
    if(this.isModified("password")){
       this.password= await bcrypt.hash(this.password,10); 
    }
    next();
});

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password);
};

export const User = mongoose.model("User",userSchema);