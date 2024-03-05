"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_repository_1 = __importDefault(require("../repositories/employee.repository"));
class EmployeeController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.title) {
                res.status(400).send({
                    message: "Content can not be empty!",
                });
                return;
            }
            try {
                const employee = req.body;
                const savedEmployee = yield employee_repository_1.default.save(employee);
                res.status(201).send(savedEmployee);
            }
            catch (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving tutorials.",
                });
            }
        });
    }
}
exports.default = EmployeeController;
