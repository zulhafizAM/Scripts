import BaseService from 'App/Services/BaseService';
import SalaryMovement from 'App/Models/SalaryMovement';

export default class SalaryMovementServices extends BaseService {
    public async getSalaryMovements({ page = 1, perPage = 10 }) {
        return this.getDataList(SalaryMovement, { page, perPage });
    }

    public async getSalaryMovement(salaryMovementId: number) {
        const readSalaryMovement = await SalaryMovement.query()
            .where('active', true)
            .where('id', salaryMovementId)
            .preload('salaryDetail', (query) => query.where('active', true))
            .preload('meeting', (query) => query.where('active', true))
            .firstOrFail();

        return readSalaryMovement;
    }

    public async addSalaryMovement(payload) {
        return this.createData(SalaryMovement, payload, 'Admin');
    }

    public async editSalaryMovement(id: number, payload) {
        return this.updateData(SalaryMovement, id, payload, 'Admin');
    }
}
