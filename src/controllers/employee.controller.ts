import { Request, Response } from "express";
import Employee from "../models/employee.model";
import employeeRepository from "../repositories/employee.repository";

export default class EmployeeController {
  async create(req: Request, res: Response) {
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    try {
      const employee: Employee = req.body;
      const savedEmployee = await employeeRepository.save(employee);
      res.status(201).send(savedEmployee);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving tutorials.",
      });
    }
  }
}
