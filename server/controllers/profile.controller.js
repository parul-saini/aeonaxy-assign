import mongoose from "mongoose";
import {Profile} from "../models/profile.model.js";
import {ApiError} from "../utils/apiError.js";
import {apiResponse} from "../utils/apiResponse.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";

const profile =  async(req,res)=>{
    try {
        const {location,recruiter,designer,insights} = req.body;
        const {userId}= req.params;
        // console.log(req.body , req.file); 
        
        const ProfileImagePath = await uploadOnCloudinary(req.file.path);
        if(!ProfileImagePath) throw new ApiError(500,"Failed to create the profile try again");

        const newProfile= await Profile.create({
            userId,
            location,
            profileImage:ProfileImagePath,
            recruiter,
            insights,
            designer, 
        });

        res.status(200)
        .json(
            new apiResponse(200,{profile},"Successfully created the  profile")
        )
    } catch (error) {
        console.log(error);
        res.status(500)
        .json(
            new apiResponse(500,{},"Failed to create the profile")
        )
    }
        
}

const getProfile = async(req, res)=>{
    try {
        const {userId}= req.params;
        if(!userId) throw new ApiError(404, "UserId not found");

        const profile = await Profile.findOne({userId});
        // console.log(profile);
        res.status(200)
        .json(
            new apiResponse(200,{profile},"Successfully retrieved the  profile")
        )
    } catch (error) {
        console.log(error);
        res.status(500)
        .json(
            new apiResponse(500,{},"Failed to get the profile")
        )
    }
}
export { profile, getProfile};
