import { UserVerification} from "../models/verifyUser.model.js";
import { User } from "../models/user.model.js";
import mongoose  from "mongoose";
import bcrypt, { compareSync } from "bcrypt";
import {ApiError} from "../utils/apiError.js";
import {apiResponse} from "../utils/apiResponse.js";
import { Resend } from 'resend';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from "nodemailer"

const sendEmailToUser = async(req,res)=>{
    try {
        const {userId} = req.params;
        // console.log("req body, userId",req.body, userId);
        const existingUser = req.body.userInfo;
        if(!existingUser) throw new ApiError(400,"User info is required to send the email");
          
        // to get email id of user to send the email
        const userEmail = existingUser.email;
        // to provide a unique string to each user
        const uniqueString = uuidv4();
        const hashUniqueString = await bcrypt.hash(uniqueString,10);
        if(!hashUniqueString) throw new ApiError(500,"Something went wrong during hashing the email data");

        // const existsingEmail = await UserVerification.find({email:userEmail});
        // if(existsingEmail) throw new ApiError(500,"We have already sent a mail on this address");
        // if(existsingEmail) throw new ApiError(500,"You have added the same email");

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587, 
            secure: true, 
            auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.MAIL_PASSWORD
            }
        });
        
        const mailOptions = {
            from: "Dribble Email <dribbleemail@gmail.com> ",
            // replyTo: 'noreply.dribbleemail@gmail.com',
            to: [`${userEmail}`],
            subject: 'Verify Your Email',
            // html: `<p>Please take a second to Verify your email address:<a href=${process.env.CORS_ORIGIN+"verify/"+"user/" + userId + "/" + uniqueString }/>Verify email</a> </p>`
            html: `<!DOCTYPE html>
            <html>
            <head>
            
              <meta charset="utf-8">
              <meta http-equiv="x-ua-compatible" content="ie=edge">
              <title>Email Confirmation</title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <style type="text/css">
              /**
               * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
               */
              @media screen {
                @font-face {
                  font-family: 'Source Sans Pro';
                  font-style: normal;
                  font-weight: 400;
                  src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
                }
                @font-face {
                  font-family: 'Source Sans Pro';
                  font-style: normal;
                  font-weight: 700;
                  src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
                }
              }
              /**
               * Avoid browser level font resizing.
               * 1. Windows Mobile
               * 2. iOS / OSX
               */
              body,
              table,
              td,
              a {
                -ms-text-size-adjust: 100%; /* 1 */
                -webkit-text-size-adjust: 100%; /* 2 */
              }
              /**
               * Remove extra space added to tables and cells in Outlook.
               */
              table,
              td {
                mso-table-rspace: 0pt;
                mso-table-lspace: 0pt;
              }
              /**
               * Better fluid images in Internet Explorer.
               */
              img {
                -ms-interpolation-mode: bicubic;
              }
              /**
               * Remove blue links for iOS devices.
               */
              a[x-apple-data-detectors] {
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                color: inherit !important;
                text-decoration: none !important;
              }
              /**
               * Fix centering issues in Android 4.4.
               */
              div[style*="margin: 16px 0;"] {
                margin: 0 !important;
              }
              body {
                width: 100% !important;
                height: 100% !important;
                padding: 0 !important;
                margin: 0 !important;
              }
              /**
               * Collapse table borders to avoid space between cells.
               */
              table {
                border-collapse: collapse !important;
              }
              a {
                color: #1a82e2;
              }
              img {
                height: auto;
                line-height: 100%;
                text-decoration: none;
                border: 0;
                outline: none;
              }
              </style>
            
            </head>
            <body style="background-color: #e9ecef;">
            
              <!-- start preheader -->
              <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
                Verify your email address
              </div>
              <!-- end preheader -->
            
              <!-- start body -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
            
                <!-- start logo -->
                <tr>
                  <td align="center" bgcolor="#e9ecef">
                    <!--[if (gte mso 9)|(IE)]>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                    <tr>
                    <td align="center" valign="top" width="600">
                    <![endif]-->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                      <tr>
                        <td align="center" valign="top" style="padding: 36px 24px;">
                          <div  style="display: inline-block;">
                            <img src="https://i.pinimg.com/236x/0b/6c/5a/0b6c5a385c87b5eb5e638b7d41fde8b4.jpg" alt="Logo" border="0" width="48" style="display: block; width: 48px; max-width: 48px; min-width: 48px;">
                          </div>
                        </td>
                      </tr>
                    </table>
                    <!--[if (gte mso 9)|(IE)]>
                    </td>
                    </tr>
                    </table>
                    <![endif]-->
                  </td>
                </tr>
                <!-- end logo -->
            
                <!-- start hero -->
                <tr>
                  <td align="center" bgcolor="#e9ecef">
                    <!--[if (gte mso 9)|(IE)]>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                    <tr>
                    <td align="center" valign="top" width="600">
                    <![endif]-->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                      <tr>
                        <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
                          <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Confirm Your Email Address</h1>
                        </td>
                      </tr>
                    </table>
                    <!--[if (gte mso 9)|(IE)]>
                    </td>
                    </tr>
                    </table>
                    <![endif]-->
                  </td>
                </tr>
                <!-- end hero -->
            
                <!-- start copy block -->
                <tr>
                  <td align="center" bgcolor="#e9ecef">
                    <!--[if (gte mso 9)|(IE)]>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                    <tr>
                    <td align="center" valign="top" width="600">
                    <![endif]-->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
            
                      <!-- start copy -->
                      <tr>
                        <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                          <p style="margin: 0;">Tap the button below to confirm your email address. If you didn't create an account with <a href=${process.env.CORS_ORIGIN}>Dribble</a>, you can safely delete this email.</p>
                        </td>
                      </tr>
                      <!-- end copy -->
            
                      <!-- start button -->
                      <tr>
                        <td align="left" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                                <table border="0" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
                                      <a  href=${process.env.CORS_ORIGIN+"/verify/"+"user/" + userId + "/" + uniqueString } target="_blank" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">Verify Email</a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <!-- end button -->
                      <!-- start copy -->
                      <tr>
                        <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
                          <p style="margin: 0;">Cheers,<br> Dribble</p>
                        </td>
                      </tr>
                      <!-- end copy -->
            
                    </table>
                    <!--[if (gte mso 9)|(IE)]>
                    </td>
                    </tr>
                    </table>
                    <![endif]-->
                  </td>
                </tr>
                <!-- end copy block -->
            
                <!-- start footer -->
                <tr>
                  <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
                    <!--[if (gte mso 9)|(IE)]>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                    <tr>
                    <td align="center" valign="top" width="600">
                    <![endif]-->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
            
                      <!-- start permission -->
                      <tr>
                        <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                          <p style="margin: 0;">You received this email because we received a request for verify your account. If you didn't request verifying you can safely delete this email.</p>
                        </td>
                      </tr>
                      <!-- end permission -->
            
                    </table>
                    <!--[if (gte mso 9)|(IE)]>
                    </td>
                    </tr>
                    </table>
                    <![endif]-->
                  </td>
                </tr>
                <!-- end footer -->
            
              </table>
              <!-- end body -->
            
            </body>
            </html>`
            };
        
        const send =  transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            } else {
            // console.log('Email sent: ' + info.response);
            return  info;
            }
        });

        if(send === null)
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
    // console.log("userId,uniqueString",userId,uniqueString); 
    try {
        const existingUser = await UserVerification.findOne({
            userId
        });
     
        if(!existingUser)
        return res.json(new apiResponse(400,{},"User does not exists"))
        
    
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