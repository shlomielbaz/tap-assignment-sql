import { OkPacket } from "mysql2";
import connection from "../db";

import ICrudRepository from "../interfaces/crud-repository.interface";
import Employee from "../models/employee.model";

class EmployeeRepository implements ICrudRepository<Employee> {
  save(employee: Employee): Promise<Employee> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>(
        "INSERT INTO employees (title, salary ) VALUES(?,?)",
        [employee.title, employee.salary],
        (err, res) => {
          if (err) reject(err);
          else
            this.retrieveById(res.insertId)
              .then((employee) => resolve(employee!))
              .catch(reject);
        }
      );
    });
  }

  retrieveAll(searchParams: {
    title: string;
    published: boolean;
  }): Promise<Employee[]> {
    throw new Error("Method not implemented.");
  }

  retrieveById(id: number): Promise<Employee> {
    return new Promise((resolve, reject) => {
      connection.query<Employee[]>(
        "SELECT * FROM employees WHERE id = ?",
        [id],
        (err, res) => {
          if (err) reject(err);
          else resolve(res?.[0]);
        }
      );
    });
  }

  update(tutorial: Employee): Promise<number> {
    throw new Error("Method not implemented.");
  }
  delete(tutorialId: number): Promise<number> {
    throw new Error("Method not implemented.");
  }
  deleteAll(): Promise<number> {
    throw new Error("Method not implemented.");
  }
}

export default new EmployeeRepository();
