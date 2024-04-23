import {Router} from "express";
import {Register, getUser,updateInfo } from "../controllers/user.controller.js";

const router= Router();

router.route("/create-account").post(Register);
router.route("/:userId")
.get(getUser)
.patch(updateInfo);


export default router;