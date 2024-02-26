import BaseService from 'App/Services/BaseService';
import ForcedRetirement from 'App/Models/ForcedRetirement';

export default class ForcedRetirementServices extends BaseService {
    public async getForcedRetirements({ page = 1, perPage = 10 }) {
        return this.getDataList(ForcedRetirement, { page, perPage });
    }

    public async getForcedRetirement(forcedRetirementId: number) {
        const readForcedRetirement = await ForcedRetirement.query()
            .where('active', true)
            .where('id', forcedRetirementId)
            .preload('employee', (query) => query.where('active', true))
            .preload('forcedRetirementProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readForcedRetirement;
    }

    public async addForcedRetirement(payload) {
        return this.createData(ForcedRetirement, payload, 'Admin');
    }

    public async editForcedRetirement(id: number, payload) {
        return this.updateData(ForcedRetirement, id, payload, 'Admin');
    }
}
