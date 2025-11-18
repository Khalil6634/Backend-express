import express from "express";
import { create_users, get_user, delete_user } from "../Controler/controler.js";

const router = express.Router()

router.post("/", create_users)
router.get("/", get_user)
router.delete("/:userId_delete", delete_user)

export default router;