import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

// More specific route should come first
router.get("/users", protectRoute, getUsersForSidebar);

// ObjectId regex pattern ensures only valid MongoDB IDs are matched
router.get("/:id([a-fA-F0-9]{24})", protectRoute, getMessages);
router.post("/send/:id([a-fA-F0-9]{24})", protectRoute, sendMessage);

export default router;
