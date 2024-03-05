"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tutorial_controller_1 = __importDefault(require("../controllers/tutorial.controller"));
const auth_validation_1 = require("../middlewares/auth.validation");
const router = (0, express_1.Router)();
const controller = new tutorial_controller_1.default();
// Create a new Tutorial
router.post("/", auth_validation_1.isAuth, controller.create);
// Retrieve all Tutorials
router.get("/", auth_validation_1.isAuth, controller.findAll);
// Retrieve all published Tutorials
router.get("/published", auth_validation_1.isAuth, controller.findAllPublished);
// Retrieve a single Tutorial with id
router.get("/:id", auth_validation_1.isAuth, controller.findOne);
// Update a Tutorial with id
router.put("/:id", auth_validation_1.isAuth, controller.update);
// Delete a Tutorial with id
router.delete("/:id", auth_validation_1.isAuth, controller.delete);
// Delete all Tutorials
router.delete("/", auth_validation_1.isAuth, controller.deleteAll);
exports.default = router;
