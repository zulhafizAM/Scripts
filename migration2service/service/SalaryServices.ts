import BaseService from 'App/Services/BaseService';
import Salary from 'App/Models/Salary';

export default class SalaryServices extends BaseService {
    public async getSalaries({ page = 1, perPage = 10 }) {
        return this.getDataList(Salary, { page, perPage });
    }

    public async getSalary(salaryId: number) {
        const readSalary = await Salary.query()
            .where('active', true)
            .where('id', salaryId)
            .preload('employee', (query) => query.where('active', true))
            .preload('salaryMovement', (query) => query.where('active', true))
            .preload('allowance', (query) => query.where('active', true))
            .preload('salaryDeduction', (query) => query.where('active', true))
            .firstOrFail();

        return readSalary;
    }

    public async addSalary(payload) {
        return this.createData(Salary, payload, 'Admin');
    }

    public async editSalary(id: number, payload) {
        return this.updateData(Salary, id, payload, 'Admin');
    }
}
