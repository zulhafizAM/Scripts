import BaseService from 'App/Services/BaseService';
import RetirementType from 'App/Models/RetirementType';

export default class RetirementTypeServices extends BaseService {
    public async getRetirementTypes({ page = 1, perPage = 10 }) {
        return this.getDataList(RetirementType, { page, perPage });
    }

    public async getRetirementType(retirementTypeId: number) {
        const readRetirementType = await RetirementType.query()
            .where('active', true)
            .where('id', retirementTypeId)
            .preload('retirementTypes', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readRetirementType;
    }

    public async addRetirementType(payload) {
        return this.createData(RetirementType, payload, 'Admin');
    }

    public async editRetirementType(id: number, payload) {
        return this.updateData(RetirementType, id, payload, 'Admin');
    }
}
