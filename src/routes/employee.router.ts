import { Router } from "express";
import EmployeeController from "../controllers/employee.controller";

const router = Router();
const controller = new EmployeeController();

// Create a new Tutorial
router.post("/", controller.create);

export default router;
