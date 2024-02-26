import BaseService from 'App/Services/BaseService';
import ForceTransferByDirector from 'App/Models/ForceTransferByDirector';

export default class ForceTransferByDirectorServices extends BaseService {
    public async getForceTransferByDirectors({ page = 1, perPage = 10 }) {
        return this.getDataList(ForceTransferByDirector, { page, perPage });
    }

    public async getForceTransferByDirector(forceTransferByDirectorId: number) {
        const readForceTransferByDirector = await ForceTransferByDirector.query()
            .where('active', true)
            .where('id', forceTransferByDirectorId)
            .preload('employee', (query) => query.where('active', true))
            .preload('meeting', (query) => query.where('active', true))
            .preload('newPlacement', (query) => query.where('active', true))
            .preload('forcedByDirectorPostponeProcess', (query) => query.where('active', true))
            .preload('forcedByDirectorProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readForceTransferByDirector;
    }

    public async addForceTransferByDirector(payload) {
        return this.createData(ForceTransferByDirector, payload, 'Admin');
    }

    public async editForceTransferByDirector(id: number, payload) {
        return this.updateData(ForceTransferByDirector, id, payload, 'Admin');
    }
}
