import BaseService from 'App/Services/BaseService';
import Department from 'App/Models/Department';

export default class DepartmentServices extends BaseService {
    public async getDepartments({ page = 1, perPage = 10 }) {
        return this.getDataList(Department, { page, perPage });
    }

    public async getDepartment(departmentId: number) {
        const readDepartment = await Department.query()
            .where('active', true)
            .where('id', departmentId)
            .preload('sections', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('employmentInterims', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readDepartment;
    }

    public async addDepartment(payload) {
        return this.createData(Department, payload, 'Admin');
    }

    public async editDepartment(id: number, payload) {
        return this.updateData(Department, id, payload, 'Admin');
    }
}
