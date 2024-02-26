import BaseService from 'App/Services/BaseService';
import EmploymentInterim from 'App/Models/EmploymentInterim';

export default class EmploymentInterimServices extends BaseService {
    public async getEmploymentInterims({ page = 1, perPage = 10 }) {
        return this.getDataList(EmploymentInterim, { page, perPage });
    }

    public async getEmploymentInterim(employmentInterimId: number) {
        const readEmploymentInterim = await EmploymentInterim.query()
            .where('active', true)
            .where('id', employmentInterimId)
            .preload('employee', (query) => query.where('active', true))
            .preload('position', (query) => query.where('active', true))
            .preload('grade', (query) => query.where('active', true))
            .preload('department', (query) => query.where('active', true))
            .preload('placement', (query) => query.where('active', true))
            .preload('applicationInterim', (query) => query.where('active', true))
            .preload('terminationInterim', (query) => query.where('active', true))
            .firstOrFail();

        return readEmploymentInterim;
    }

    public async addEmploymentInterim(payload) {
        return this.createData(EmploymentInterim, payload, 'Admin');
    }

    public async editEmploymentInterim(id: number, payload) {
        return this.updateData(EmploymentInterim, id, payload, 'Admin');
    }
}
