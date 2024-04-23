import { Router } from "express";
import  {upload}  from "../middleware/multer.js";
import {profile, getProfile} from "../controllers/profile.controller.js";

const router= Router();

router.route("/:userId").post(upload.single('profileImage'), profile).get(getProfile);

export default router;