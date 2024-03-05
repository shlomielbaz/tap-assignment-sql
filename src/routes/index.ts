import express, { Application } from "express";
import tutorialRoutes from "./tutorial.routes";
import employeeRoutes from "./employee.router";
import homeRoutes from "./home.routes";

const router = express.Router();

router.use("/", homeRoutes);
router.use("/tutorials", tutorialRoutes);
router.use("/employees", employeeRoutes);

export default router;