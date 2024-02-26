import BaseService from 'App/Services/BaseService';
import AccruedAnnualLeave from 'App/Models/AccruedAnnualLeave';

export default class AccruedAnnualLeaveServices extends BaseService {
    public async getAccruedAnnualLeaves({ page = 1, perPage = 10 }) {
        return this.getDataList(AccruedAnnualLeave, { page, perPage });
    }

    public async getAccruedAnnualLeave(accruedAnnualLeaveId: number) {
        const readAccruedAnnualLeave = await AccruedAnnualLeave.query()
            .where('active', true)
            .where('id', accruedAnnualLeaveId)
            .preload('employee', (query) => query.where('active', true))
            .preload('accruedAnnualLeaveProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readAccruedAnnualLeave;
    }

    public async addAccruedAnnualLeave(payload) {
        return this.createData(AccruedAnnualLeave, payload, 'Admin');
    }

    public async editAccruedAnnualLeave(id: number, payload) {
        return this.updateData(AccruedAnnualLeave, id, payload, 'Admin');
    }
}
