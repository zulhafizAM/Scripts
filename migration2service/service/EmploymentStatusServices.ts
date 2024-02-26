import BaseService from 'App/Services/BaseService';
import EmploymentStatus from 'App/Models/EmploymentStatus';

export default class EmploymentStatusServices extends BaseService {
    public async getEmploymentStatus({ page = 1, perPage = 10 }) {
        return this.getDataList(EmploymentStatus, { page, perPage });
    }

    public async getEmploymentStatus(employmentStatusId: number) {
        const readEmploymentStatus = await EmploymentStatus.query()
            .where('active', true)
            .where('id', employmentStatusId)
            .firstOrFail();

        return readEmploymentStatus;
    }

    public async addEmploymentStatus(payload) {
        return this.createData(EmploymentStatus, payload, 'Admin');
    }

    public async editEmploymentStatus(id: number, payload) {
        return this.updateData(EmploymentStatus, id, payload, 'Admin');
    }
}
