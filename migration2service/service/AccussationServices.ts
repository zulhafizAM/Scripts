import BaseService from 'App/Services/BaseService';
import Accussation from 'App/Models/Accussation';

export default class AccussationServices extends BaseService {
    public async getAccussations({ page = 1, perPage = 10 }) {
        return this.getDataList(Accussation, { page, perPage });
    }

    public async getAccussation(accussationId: number) {
        const readAccussation = await Accussation.query()
            .where('active', true)
            .where('id', accussationId)
            .preload('integrity', (query) => query.where('active', true))
            .firstOrFail();

        return readAccussation;
    }

    public async addAccussation(payload) {
        return this.createData(Accussation, payload, 'Admin');
    }

    public async editAccussation(id: number, payload) {
        return this.updateData(Accussation, id, payload, 'Admin');
    }
}
