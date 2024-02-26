import BaseService from 'App/Services/BaseService';
import UnspecifiedRetirement from 'App/Models/UnspecifiedRetirement';

export default class UnspecifiedRetirementServices extends BaseService {
    public async getUnspecifiedRetirements({ page = 1, perPage = 10 }) {
        return this.getDataList(UnspecifiedRetirement, { page, perPage });
    }

    public async getUnspecifiedRetirement(unspecifiedRetirementId: number) {
        const readUnspecifiedRetirement = await UnspecifiedRetirement.query()
            .where('active', true)
            .where('id', unspecifiedRetirementId)
            .preload('employee', (query) => query.where('active', true))
            .preload('confirmer', (query) => query.where('active', true))
            .preload('retirementType', (query) => query.where('active', true))
            .preload('group', (query) => query.where('active', true))
            .firstOrFail();

        return readUnspecifiedRetirement;
    }

    public async addUnspecifiedRetirement(payload) {
        return this.createData(UnspecifiedRetirement, payload, 'Admin');
    }

    public async editUnspecifiedRetirement(id: number, payload) {
        return this.updateData(UnspecifiedRetirement, id, payload, 'Admin');
    }
}
