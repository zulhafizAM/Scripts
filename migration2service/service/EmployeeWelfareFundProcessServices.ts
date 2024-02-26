import BaseService from 'App/Services/BaseService';
import EmployeeWelfareFundProcess from 'App/Models/EmployeeWelfareFundProcess';

export default class EmployeeWelfareFundProcessServices extends BaseService {
    public async getEmployeeWelfareFundProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(EmployeeWelfareFundProcess, { page, perPage });
    }

    public async getEmployeeWelfareFundProcess(employeeWelfareFundProcessId: number) {
        const readEmployeeWelfareFundProcess = await EmployeeWelfareFundProcess.query()
            .where('active', true)
            .where('id', employeeWelfareFundProcessId)
            .preload('welfareFund', (query) => query.where('active', true))
            .preload('directorSupporter', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('appointedSupporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readEmployeeWelfareFundProcess;
    }

    public async addEmployeeWelfareFundProcess(payload) {
        return this.createData(EmployeeWelfareFundProcess, payload, 'Admin');
    }

    public async editEmployeeWelfareFundProcess(id: number, payload) {
        return this.updateData(EmployeeWelfareFundProcess, id, payload, 'Admin');
    }
}
