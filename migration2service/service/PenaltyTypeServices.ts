import BaseService from 'App/Services/BaseService';
import PenaltyType from 'App/Models/PenaltyType';

export default class PenaltyTypeServices extends BaseService {
    public async getPenaltyTypes({ page = 1, perPage = 10 }) {
        return this.getDataList(PenaltyType, { page, perPage });
    }

    public async getPenaltyType(penaltyTypeId: number) {
        const readPenaltyType = await PenaltyType.query()
            .where('active', true)
            .where('id', penaltyTypeId)
            .preload('sentencings', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readPenaltyType;
    }

    public async addPenaltyType(payload) {
        return this.createData(PenaltyType, payload, 'Admin');
    }

    public async editPenaltyType(id: number, payload) {
        return this.updateData(PenaltyType, id, payload, 'Admin');
    }
}
