import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSiderbar } from "../controllers/message.controller.js";
import { getMessage } from "../controllers/message.controller.js";
import { sendMessage } from "../controllers/message.controller.js";
const router = express.Router();

router.get("/users",protectRoute,getUsersForSiderbar);
router.get("/:id",protectRoute,getMessage);

router.post("/send/:id",protectRoute,sendMessage);
export default router;
