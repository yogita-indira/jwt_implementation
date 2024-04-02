import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
const router=Router();
router.post('/register', AuthController.Register);
router.post('/login', AuthController.logIn)

export default router;