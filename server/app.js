import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(cors());
// express.json() middleware parses the JSON data and makes it available in req.body of your route handlers.
app.use(express.json());
app.use(express.urlencoded({extended:true, limit:"16kb"}));
// Middleware to parse URL-encoded bodies
app.use(express.static("public"));
app.use(cookieParser());

app.get("/home",(req,res)=>{
    res.send("home page");
})


// routes import 
import userRoutes from "./routes/user.router.js";
import profileRoutes from "./routes/profile.router.js";
import verifyRoutes from "./routes/verify.router.js";

// routes declaration
app.use("/users",userRoutes);
app.use("/profile",profileRoutes);
app.use("/verify",verifyRoutes);

export default app;