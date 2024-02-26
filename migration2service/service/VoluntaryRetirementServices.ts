import BaseService from 'App/Services/BaseService';
import VoluntaryRetirement from 'App/Models/VoluntaryRetirement';

export default class VoluntaryRetirementServices extends BaseService {
    public async getVoluntaryRetirements({ page = 1, perPage = 10 }) {
        return this.getDataList(VoluntaryRetirement, { page, perPage });
    }

    public async getVoluntaryRetirement(voluntaryRetirementId: number) {
        const readVoluntaryRetirement = await VoluntaryRetirement.query()
            .where('active', true)
            .where('id', voluntaryRetirementId)
            .preload('employee', (query) => query.where('active', true))
            .preload('voluntaryRetirementProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readVoluntaryRetirement;
    }

    public async addVoluntaryRetirement(payload) {
        return this.createData(VoluntaryRetirement, payload, 'Admin');
    }

    public async editVoluntaryRetirement(id: number, payload) {
        return this.updateData(VoluntaryRetirement, id, payload, 'Admin');
    }
}
