import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async (localPath)=>{
    try {
        if(!localPath) return null;
        // console.log(localPath);
        const response = await cloudinary.uploader.upload(localPath,
        {resource_type:"auto"} );
        
        fs.unlinkSync(localPath);
        return response.url;
    } catch (error) {
        console.log(error);
        if(localPath)
        fs.unlinkSync(localPath);
        console.log("Failed to Upload on cloudinary :(");
        return null;
    }

}

export {uploadOnCloudinary};





