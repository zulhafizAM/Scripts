import BaseService from 'App/Services/BaseService';
import AlternateUntrackedLeave from 'App/Models/AlternateUntrackedLeave';

export default class AlternateUntrackedLeaveServices extends BaseService {
    public async getAlternateUntrackedLeaves({ page = 1, perPage = 10 }) {
        return this.getDataList(AlternateUntrackedLeave, { page, perPage });
    }

    public async getAlternateUntrackedLeave(alternateUntrackedLeaveId: number) {
        const readAlternateUntrackedLeave = await AlternateUntrackedLeave.query()
            .where('active', true)
            .where('id', alternateUntrackedLeaveId)
            .preload('employee', (query) => query.where('active', true))
            .preload('alternateUntrackedLeaveProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readAlternateUntrackedLeave;
    }

    public async addAlternateUntrackedLeave(payload) {
        return this.createData(AlternateUntrackedLeave, payload, 'Admin');
    }

    public async editAlternateUntrackedLeave(id: number, payload) {
        return this.updateData(AlternateUntrackedLeave, id, payload, 'Admin');
    }
}
