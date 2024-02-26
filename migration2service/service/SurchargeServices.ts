import BaseService from 'App/Services/BaseService';
import Surcharge from 'App/Models/Surcharge';

export default class SurchargeServices extends BaseService {
    public async getSurcharges({ page = 1, perPage = 10 }) {
        return this.getDataList(Surcharge, { page, perPage });
    }

    public async getSurcharge(surchargeId: number) {
        const readSurcharge = await Surcharge.query()
            .where('active', true)
            .where('id', surchargeId)
            .preload('employee', (query) => query.where('active', true))
            .preload('meeting', (query) => query.where('active', true))
            .firstOrFail();

        return readSurcharge;
    }

    public async addSurcharge(payload) {
        return this.createData(Surcharge, payload, 'Admin');
    }

    public async editSurcharge(id: number, payload) {
        return this.updateData(Surcharge, id, payload, 'Admin');
    }
}
