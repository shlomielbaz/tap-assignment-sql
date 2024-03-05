import { Router } from "express";
import TutorialController from "../controllers/tutorial.controller";

const router = Router();
const controller = new TutorialController();

// Create a new Tutorial
router.post("/", controller.create);

// Retrieve all Tutorials
router.get("/", controller.findAll);

// Retrieve all published Tutorials
router.get("/published", controller.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", controller.findOne);

// Update a Tutorial with id
router.put("/:id", controller.update);

// Delete a Tutorial with id
router.delete("/:id", controller.delete);

// Delete all Tutorials
router.delete("/", controller.deleteAll);

export default router;
