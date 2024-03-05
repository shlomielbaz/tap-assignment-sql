import Tutorial from "../models/tutorial.model";
import employeeRepository from "../repositories/employee.repository";

class TutorialService {
  async create(tutorial: Tutorial): Promise<Tutorial> {
    return await employeeRepository.save(tutorial);
  }

  async findAll(title: string): Promise<Tutorial[]> {
    return await employeeRepository.retrieveAll();
  }

  async findOne(id: number): Promise<Tutorial> {
    return await employeeRepository.retrieveById(id);
  }

  async update(id: number, tutorial: Tutorial): Promise<number> {
    tutorial.id = id;

    return await employeeRepository.update(tutorial);
  }

  async delete(id: number): Promise<number> {
    return await employeeRepository.delete(id);
  }

  async deleteAll(): Promise<number> {
    return await employeeRepository.deleteAll();
  }

  async findAllPublished(): Promise<Tutorial[]> {
    return await employeeRepository.retrieveAll();
  }
}

export default new TutorialService();
