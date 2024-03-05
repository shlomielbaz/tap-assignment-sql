"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tutorial_controller_1 = __importDefault(require("../controllers/tutorial.controller"));
const router = (0, express_1.Router)();
const controller = new tutorial_controller_1.default();
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
exports.default = router;
