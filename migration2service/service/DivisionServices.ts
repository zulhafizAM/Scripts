import BaseService from 'App/Services/BaseService';
import Division from 'App/Models/Division';

export default class DivisionServices extends BaseService {
    public async getDivisions({ page = 1, perPage = 10 }) {
        return this.getDataList(Division, { page, perPage });
    }

    public async getDivision(divisionId: number) {
        const readDivision = await Division.query()
            .where('active', true)
            .where('id', divisionId)
            .preload('state', (query) => query.where('active', true))
            .preload('districts', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readDivision;
    }

    public async addDivision(payload) {
        return this.createData(Division, payload, 'Admin');
    }

    public async editDivision(id: number, payload) {
        return this.updateData(Division, id, payload, 'Admin');
    }
}
