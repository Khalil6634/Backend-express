import express from "express";
import {
  createUsers,
  getUsers,
  deleteUser,
  FindUser,
  updateItem,
} from "../Controler/controler.js";

const router = express.Router();

router.post("/createUsers", createUsers);

router.get("/getUsers", getUsers);
router.get("/findUsers/:Name", FindUser);

router.patch("/updateItem/:id", updateItem)
router.delete("/deleteUsers/:id", deleteUser);

export default router;
