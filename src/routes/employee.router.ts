import { Router } from "express";
import EmployeeController from "../controllers/employee.controller";
import { isAuth } from "../middlewares/auth.validation";

const router = Router();
const controller = new EmployeeController();

// Create a new Tutorial
router.post("/", isAuth, controller.create);

export default router;
