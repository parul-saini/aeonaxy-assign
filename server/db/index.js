import  mongoose  from "mongoose";

const DbConnect = async()=>{
    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log(`Connected with database successfully!`);
    } catch (error) {
        console.log(error);
        console.log(`Failed to connect with database `);
    }
}

export default DbConnect;