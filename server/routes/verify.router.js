import { Router } from "express";
import {sendEmailToUser,verifyTheEmail} from "../controllers/verify.controller.js";

const router = Router();

router.route("/user/:userId/:uniqueString").get(verifyTheEmail);
router.route("/:userId").post(sendEmailToUser);

export default router ;






