import BaseService from 'App/Services/BaseService';
import Employee from 'App/Models/Employee';

export default class EmployeeServices extends BaseService {
    public async getEmployees({ page = 1, perPage = 10 }) {
        return this.getDataList(Employee, { page, perPage });
    }

    public async getEmployee(employeeId: number) {
        const readEmployee = await Employee.query()
            .where('active', true)
            .where('id', employeeId)
            .preload('personalDetail', (query) => query.where('active', true))
            .preload('position', (query) => query.where('active', true))
            .preload('grade', (query) => query.where('active', true))
            .preload('serviceType', (query) => query.where('active', true))
            .preload('serviceGroup', (query) => query.where('active', true))
            .preload('unit', (query) => query.where('active', true))
            .preload('placement', (query) => query.where('active', true))
            .preload('userAccount', (query) => query.where('active', true))
            .preload('temporaryPermissions', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('employeeRoles', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readEmployee;
    }

    public async addEmployee(payload) {
        return this.createData(Employee, payload, 'Admin');
    }

    public async editEmployee(id: number, payload) {
        return this.updateData(Employee, id, payload, 'Admin');
    }
}
