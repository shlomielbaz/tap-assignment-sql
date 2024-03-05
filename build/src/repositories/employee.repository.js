"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
class EmployeeRepository {
    save(employee) {
        return new Promise((resolve, reject) => {
            db_1.default.query("INSERT INTO employees (title, salary ) VALUES(?,?)", [employee.title, employee.salary], (err, res) => {
                if (err)
                    reject(err);
                else
                    this.retrieveById(res.insertId)
                        .then((employee) => resolve(employee))
                        .catch(reject);
            });
        });
    }
    retrieveAll(searchParams) {
        throw new Error("Method not implemented.");
    }
    retrieveById(id) {
        return new Promise((resolve, reject) => {
            db_1.default.query("SELECT * FROM employees WHERE id = ?", [id], (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res === null || res === void 0 ? void 0 : res[0]);
            });
        });
    }
    update(tutorial) {
        throw new Error("Method not implemented.");
    }
    delete(tutorialId) {
        throw new Error("Method not implemented.");
    }
    deleteAll() {
        throw new Error("Method not implemented.");
    }
}
exports.default = new EmployeeRepository();
