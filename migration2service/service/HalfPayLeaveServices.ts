import BaseService from 'App/Services/BaseService';
import HalfPayLeave from 'App/Models/HalfPayLeave';

export default class HalfPayLeaveServices extends BaseService {
    public async getHalfPayLeaves({ page = 1, perPage = 10 }) {
        return this.getDataList(HalfPayLeave, { page, perPage });
    }

    public async getHalfPayLeave(halfPayLeaveId: number) {
        const readHalfPayLeave = await HalfPayLeave.query()
            .where('active', true)
            .where('id', halfPayLeaveId)
            .preload('employee', (query) => query.where('active', true))
            .preload('meeting', (query) => query.where('active', true))
            .preload('halfPayLeaveProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readHalfPayLeave;
    }

    public async addHalfPayLeave(payload) {
        return this.createData(HalfPayLeave, payload, 'Admin');
    }

    public async editHalfPayLeave(id: number, payload) {
        return this.updateData(HalfPayLeave, id, payload, 'Admin');
    }
}
