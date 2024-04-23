import  mongoose  from "mongoose";

const ProfileSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // 'User' is the name of the referenced model
    },
    location:{
    type:String,
    required:true,
    },
    profileImage:{
        type:String,
    },
    recruiter:{
       type : Boolean,
      default:false,
    },
    designer:{
       type : Boolean,
      default:false,
    },
    insights:{
       type : Boolean,
      default:false,
    },
},{timeStamps:true});

export const Profile= mongoose.model("Profile",ProfileSchema);