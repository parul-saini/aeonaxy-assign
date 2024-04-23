import { UserVerification} from "../models/verifyUser.model.js";
import { User } from "../models/user.model.js";
import mongoose  from "mongoose";
import bcrypt, { compareSync } from "bcrypt";
import {ApiError} from "../utils/apiError.js";
import {apiResponse} from "../utils/apiResponse.js";
import { Resend } from 'resend';
import { v4 as uuidv4 } from 'uuid';

const sendEmailToUser = async(req,res)=>{
    try {
        const {userId} = req.params;
        console.log(req.body);
        const existingUser = req.body.userInfo;
        if(!existingUser) throw new ApiError(400,"User info is required to send the email");
          
        // to get email id of user to send the email
        const userEmail = existingUser.email;
        // to provide a unique string to each user
        const uniqueString = uuidv4();
        const hashUniqueString = await bcrypt.hash(uniqueString,10);
        if(!hashUniqueString) throw new ApiError(500,"Something went wrong during hashing the email data");

        const existsUserId = await UserVerification.findOne({userId});
        if(existsUserId) throw new ApiError(500,"You already sent a mail try again after 10-15 minutes ");

        const resend = new Resend('re_6qHp9kbX_Mz5U176mm7uZ6EgQRgLu37nG');
        
        const send = await resend.emails.send({
          from: process.env.EMAIL_DOMAIN ,
          to: [`${userEmail}`],
          subject: 'Verify Your Email',
          html: `<p>Please take a second to Verify your email address:<a href=${process.env.CORS_ORIGIN+"verify/"+"user/" + userId + "/" + uniqueString }/>Verify email</a> </p>`
        });
        console.log("send email :: ", send);
        if(send.data === null)
        throw new ApiError(500,send.error.message);

        // email sent and verification records saved 
        const newVerifyUser =  await UserVerification.create({
            userId,
            uniqueIdForUser:hashUniqueString,
            createdAt:Date.now(),
            expiryDate:Date.now()+(60000*10),
        });
        if(!newVerifyUser) throw new ApiError(500,"Something went wrong during saving the verify email data");

        return res.status(200)
        .json(
            new apiResponse(200,{userId,uniqueString},"Verification email sent")
        );

    } catch (error) {
        console.log("error",error);
        return res.status(200)
        .json(
            new apiResponse(500,{error},"Something went wrong in sending the email to user")
        );
    }

}

const verifyTheEmail = async(req,res)=>{
    const {userId,uniqueString} = req.params;
    // console.log(userId); 
    try {
        const existingUser = await UserVerification.findOne({
            userId
        });
     
        if(!existingUser)
        return res.json(new apiResponse(400,{},"We're sorry, but the verification link has expired , Send email again"))
        
    
        const hashedString =  existingUser.uniqueIdForUser;
        if (!hashedString) {
            throw new apiResponse(400,{}, "User verification data is missing or invalid");
        }
       
        const hashValueMatch = await bcrypt.compare(uniqueString , hashedString);
 
        
        if(!hashValueMatch)
        throw new apiResponse(400,{},"Something went wrong , Send email again");
        
        const afterVerifyUser = await UserVerification.deleteOne({
            $and:[{uniqueIdForUser:hashedString},{userId}]
        });
        
        if(afterVerifyUser.deletedCount===0)
        throw new apiResponse(400,{},"Verification Failed , Send email again");
        
        const changeUserVerificationField = await User.findByIdAndUpdate( userId,
            {
              $set:{verified:true}
            },
            {new:true}
        );

        //console.log(changeUserVerificationField);
        res.status(200)
        .json(
            new apiResponse(200,{changeUserVerificationField},"Verification Done Successfully")
        )
    } catch (error) {
        console.log(error);
        res.status(200)
        .json(
            new apiResponse(500,{error},"Verification Failed  ")
        )
    }

  
}


export {sendEmailToUser,verifyTheEmail};