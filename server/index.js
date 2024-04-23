import dotenv from "dotenv";
import DbConnect from "./db/index.js";
import app from "./app.js";

dotenv.config(); 

DbConnect().then(()=>{
    app.on("error",(err)=>{
        console.log(`error ${err}`);
        throw err;
    })
    app.listen(process.env.PORT || 9000,()=>{
    console.log(`server started at ${9000}`);
    })
})
.catch(()=>{
    console.log(`server not Listen and Db not connected`);
});

