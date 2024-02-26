import BaseService from 'App/Services/BaseService';
import Quarter from 'App/Models/Quarter';

export default class QuarterServices extends BaseService {
    public async getQuarters({ page = 1, perPage = 10 }) {
        return this.getDataList(Quarter, { page, perPage });
    }

    public async getQuarter(quarterId: number) {
        const readQuarter = await Quarter.query()
            .where('active', true)
            .where('id', quarterId)
            .preload('deduction', (query) => query.where('active', true))
            .preload('movingIn', (query) => query.where('active', true))
            .preload('movingOut', (query) => query.where('active', true))
            .firstOrFail();

        return readQuarter;
    }

    public async addQuarter(payload) {
        return this.createData(Quarter, payload, 'Admin');
    }

    public async editQuarter(id: number, payload) {
        return this.updateData(Quarter, id, payload, 'Admin');
    }
}
