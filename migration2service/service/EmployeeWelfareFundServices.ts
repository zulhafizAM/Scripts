import BaseService from 'App/Services/BaseService';
import EmployeeWelfareFund from 'App/Models/EmployeeWelfareFund';

export default class EmployeeWelfareFundServices extends BaseService {
    public async getEmployeeWelfareFunds({ page = 1, perPage = 10 }) {
        return this.getDataList(EmployeeWelfareFund, { page, perPage });
    }

    public async getEmployeeWelfareFund(employeeWelfareFundId: number) {
        const readEmployeeWelfareFund = await EmployeeWelfareFund.query()
            .where('active', true)
            .where('id', employeeWelfareFundId)
            .preload('allowance', (query) => query.where('active', true))
            .preload('employeeWelfareFundProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readEmployeeWelfareFund;
    }

    public async addEmployeeWelfareFund(payload) {
        return this.createData(EmployeeWelfareFund, payload, 'Admin');
    }

    public async editEmployeeWelfareFund(id: number, payload) {
        return this.updateData(EmployeeWelfareFund, id, payload, 'Admin');
    }
}
