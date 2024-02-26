import BaseService from 'App/Services/BaseService';
import ApplicationInterim from 'App/Models/ApplicationInterim';

export default class ApplicationInterimServices extends BaseService {
    public async getApplicationInterims({ page = 1, perPage = 10 }) {
        return this.getDataList(ApplicationInterim, { page, perPage });
    }

    public async getApplicationInterim(applicationInterimId: number) {
        const readApplicationInterim = await ApplicationInterim.query()
            .where('active', true)
            .where('id', applicationInterimId)
            .preload('interim', (query) => query.where('active', true))
            .preload('applicationInterimProcess', (query) => query.where('active', true))
            .preload('checklistInterim', (query) => query.where('active', true))
            .firstOrFail();

        return readApplicationInterim;
    }

    public async addApplicationInterim(payload) {
        return this.createData(ApplicationInterim, payload, 'Admin');
    }

    public async editApplicationInterim(id: number, payload) {
        return this.updateData(ApplicationInterim, id, payload, 'Admin');
    }
}
