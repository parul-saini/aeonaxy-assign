import  mongoose  from "mongoose";
import {User} from "../models/user.model.js";
import {ApiError} from "../utils/apiError.js";
import {apiResponse} from "../utils/apiResponse.js";

const Register = async(req,res)=>{
    const {name,userName,email,password}= req.body;
    if(
        [name,userName,email,password].some((field)=> field?.trim() === "")
    )
    return res.json(new apiResponse(400,{},"All fields are required"));

    try {

    const isEmailExist= await User.findOne({email})
    if(isEmailExist) return res.json( new apiResponse(400,{},"Email already exists"));

    const isUserNameExist= await User.findOne({userName})
    if(isUserNameExist) 
    return res.json( new apiResponse(400,{},"UserName already exists"));

    
        const newUser = await User.create({
            email,
            name,
            userName,
            password,
        });

        // Fetch the newly created user document without the password and email fields
        const userWithoutSensitiveData = await User.findById(newUser._id).select("-password -email");

        return res.status(200)
        .json(
            new apiResponse(200,{user:userWithoutSensitiveData},"Successfully created new user")
        )
    
    } catch (error) {
        console.log(error);
        res.status(500)
        .json(
            new apiResponse(500,{},"Something went wrong during register the new user")
        )
    }

}

const getUser= async(req,res)=>{
    const {userId}= req.params;
    try {
        const user = await User.findById(userId).select("-password");

        if(!user)
        throw new ApiError(500,"User not exists with this id ");

         return res.status(200)
        .json(
            new apiResponse(200,{user},"Successfully fetched user")
        )
    } catch (error) {
        res.status(200)
        .json(
            new apiResponse(500,{error},"something went wrong")
        )
    }
}

const updateInfo= async(req,res)=>{
    const {userId} = req.params;
    const {email} = req.body;
    console.log(email);
    try {
        const user = await User.findByIdAndUpdate(
            userId,
            {
                $set:{email}
            },{
                new:true
            }
        )

        if(!user)
        throw new ApiError(500,"User not exists with this id ");

         return res.status(200)
        .json(
            new apiResponse(200,{user},"Successfully Updated user email Id")
        )
    } catch (error) {
        res.status(200)
        .json(
            new apiResponse(500,{error},"Something went wrong")
        )
    }
}

export {Register,getUser,updateInfo};

