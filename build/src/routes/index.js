"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tutorial_routes_1 = __importDefault(require("./tutorial.routes"));
const employee_router_1 = __importDefault(require("./employee.router"));
const home_routes_1 = __importDefault(require("./home.routes"));
const router = express_1.default.Router();
router.use("/", home_routes_1.default);
router.use("/tutorials", tutorial_routes_1.default);
router.use("/employees", employee_router_1.default);
exports.default = router;
