import { Router } from "express";
import { login, signup } from "../controllers/users.controller.js";

const router = Router();

router.get("/test", (req, res) => {
  res.json(["ok"]);
});

router.post("/signup", signup);
router.post("/login", login);
router.post("/test", (req, res) => {
  res.json(["ok"]);
});
export default router;
