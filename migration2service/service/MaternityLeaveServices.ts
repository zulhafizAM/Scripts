import BaseService from 'App/Services/BaseService';
import MaternityLeave from 'App/Models/MaternityLeave';

export default class MaternityLeaveServices extends BaseService {
    public async getMaternityLeaves({ page = 1, perPage = 10 }) {
        return this.getDataList(MaternityLeave, { page, perPage });
    }

    public async getMaternityLeave(maternityLeaveId: number) {
        const readMaternityLeave = await MaternityLeave.query()
            .where('active', true)
            .where('id', maternityLeaveId)
            .preload('employee', (query) => query.where('active', true))
            .preload('maternityLeaveProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readMaternityLeave;
    }

    public async addMaternityLeave(payload) {
        return this.createData(MaternityLeave, payload, 'Admin');
    }

    public async editMaternityLeave(id: number, payload) {
        return this.updateData(MaternityLeave, id, payload, 'Admin');
    }
}
