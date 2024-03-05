"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_controller_1 = __importDefault(require("../controllers/employee.controller"));
const router = (0, express_1.Router)();
const controller = new employee_controller_1.default();
// Create a new Tutorial
router.post("/", controller.create);
exports.default = router;
