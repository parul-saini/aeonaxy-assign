import mongoose from "mongoose";

const UserVerificationSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // 'User' is the name of the referenced model
    },
    uniqueIdForUser:{
        type:String
    },
    createdAt:{
        type:Date,
        default: Date.now(),
    },
    expiryDate:{
        type:Date,
        expires: '10m',
        default: new Date(Date.now() + 60000 *10)
    }
});

export const UserVerification = mongoose.model("UserVerification",UserVerificationSchema);