import { OkPacket } from "mysql2";
import connection from "../db";

import ICrudRepository from "../interfaces/crud-repository.interface";
import Employee from "../models/employee.model";

class EmployeeRepository implements ICrudRepository<Employee> {
  filterBy(searchParams: any): Promise<Employee[]> {
    throw new Error("Method not implemented.");
  }
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

  retrieveAll(): Promise<Employee[]> {
    let query: string = "SELECT * FROM employees";
    // let condition: string = "";

    // if (searchParams?.title)
    //   condition += `LOWER(title) LIKE '%${searchParams.title}%'`;

    // if (condition.length) query += " WHERE " + condition;

    return new Promise((resolve, reject) => {
      connection.query<Employee[]>(query, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
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

  update(employee: Employee): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>(
        "UPDATE employees SET title = ?, salary = ? WHERE id = ?",
        [employee.title, employee.salary, employee.id],
        (err, res) => {
          if (err) reject(err);
          else resolve(res.affectedRows);
        }
      );
    });
  }

  delete(id: number): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>(
        "DELETE FROM employees WHERE id = ?",
        [id],
        (err, res) => {
          if (err) reject(err);
          else resolve(res.affectedRows);
        }
      );
    });
  }

  deleteAll(): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>("DELETE FROM employees", (err, res) => {
        if (err) reject(err);
        else resolve(res.affectedRows);
      });
    });
  }
}

export default new EmployeeRepository();
