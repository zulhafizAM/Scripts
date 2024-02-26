import BaseService from 'App/Services/BaseService';
import ReplacementAnnualLeave from 'App/Models/ReplacementAnnualLeave';

export default class ReplacementAnnualLeaveServices extends BaseService {
    public async getReplacementAnnualLeaves({ page = 1, perPage = 10 }) {
        return this.getDataList(ReplacementAnnualLeave, { page, perPage });
    }

    public async getReplacementAnnualLeave(replacementAnnualLeaveId: number) {
        const readReplacementAnnualLeave = await ReplacementAnnualLeave.query()
            .where('active', true)
            .where('id', replacementAnnualLeaveId)
            .preload('employee', (query) => query.where('active', true))
            .preload('replacementAnnualLeaveProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readReplacementAnnualLeave;
    }

    public async addReplacementAnnualLeave(payload) {
        return this.createData(ReplacementAnnualLeave, payload, 'Admin');
    }

    public async editReplacementAnnualLeave(id: number, payload) {
        return this.updateData(ReplacementAnnualLeave, id, payload, 'Admin');
    }
}
