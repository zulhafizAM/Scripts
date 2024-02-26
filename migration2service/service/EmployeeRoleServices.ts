import BaseService from 'App/Services/BaseService';
import EmployeeRole from 'App/Models/EmployeeRole';

export default class EmployeeRoleServices extends BaseService {
    public async getEmployeeRoles({ page = 1, perPage = 10 }) {
        return this.getDataList(EmployeeRole, { page, perPage });
    }

    public async getEmployeeRole(employeeRoleId: number) {
        const readEmployeeRole = await EmployeeRole.query()
            .where('active', true)
            .where('id', employeeRoleId)
            .preload('employee', (query) => query.where('active', true))
            .preload('role', (query) => query.where('active', true))
            .firstOrFail();

        return readEmployeeRole;
    }

    public async addEmployeeRole(payload) {
        return this.createData(EmployeeRole, payload, 'Admin');
    }

    public async editEmployeeRole(id: number, payload) {
        return this.updateData(EmployeeRole, id, payload, 'Admin');
    }
}
