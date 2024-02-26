import BaseService from 'App/Services/BaseService';
import Placement from 'App/Models/Placement';

export default class PlacementServices extends BaseService {
    public async getPlacements({ page = 1, perPage = 10 }) {
        return this.getDataList(Placement, { page, perPage });
    }

    public async getPlacement(placementId: number) {
        const readPlacement = await Placement.query()
            .where('active', true)
            .where('id', placementId)
            .preload('employees', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('employmentInterims', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('selfRequests', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('selfRequests', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('forceTransferByDirectors', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('forceTransferByManagements', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('gradeActingPostponeProcesses', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('contractDetails', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readPlacement;
    }

    public async addPlacement(payload) {
        return this.createData(Placement, payload, 'Admin');
    }

    public async editPlacement(id: number, payload) {
        return this.updateData(Placement, id, payload, 'Admin');
    }
}
