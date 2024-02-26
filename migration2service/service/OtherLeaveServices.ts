import BaseService from 'App/Services/BaseService';
import OtherLeave from 'App/Models/OtherLeave';

export default class OtherLeaveServices extends BaseService {
    public async getOtherLeaves({ page = 1, perPage = 10 }) {
        return this.getDataList(OtherLeave, { page, perPage });
    }

    public async getOtherLeave(otherLeaveId: number) {
        const readOtherLeave = await OtherLeave.query()
            .where('active', true)
            .where('id', otherLeaveId)
            .preload('employee', (query) => query.where('active', true))
            .preload('otherLeaveProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readOtherLeave;
    }

    public async addOtherLeave(payload) {
        return this.createData(OtherLeave, payload, 'Admin');
    }

    public async editOtherLeave(id: number, payload) {
        return this.updateData(OtherLeave, id, payload, 'Admin');
    }
}
