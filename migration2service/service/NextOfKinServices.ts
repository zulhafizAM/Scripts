import BaseService from 'App/Services/BaseService';
import NextOfKin from 'App/Models/NextOfKin';

export default class NextOfKinServices extends BaseService {
    public async getNextOfKins({ page = 1, perPage = 10 }) {
        return this.getDataList(NextOfKin, { page, perPage });
    }

    public async getNextOfKin(nextOfKinId: number) {
        const readNextOfKin = await NextOfKin.query()
            .where('active', true)
            .where('id', nextOfKinId)
            .preload('personalDetail', (query) => query.where('active', true))
            .preload('state', (query) => query.where('active', true))
            .firstOrFail();

        return readNextOfKin;
    }

    public async addNextOfKin(payload) {
        return this.createData(NextOfKin, payload, 'Admin');
    }

    public async editNextOfKin(id: number, payload) {
        return this.updateData(NextOfKin, id, payload, 'Admin');
    }
}
