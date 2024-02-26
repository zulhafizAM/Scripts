import BaseService from 'App/Services/BaseService';
import TerminationInterim from 'App/Models/TerminationInterim';

export default class TerminationInterimServices extends BaseService {
    public async getTerminationInterims({ page = 1, perPage = 10 }) {
        return this.getDataList(TerminationInterim, { page, perPage });
    }

    public async getTerminationInterim(terminationInterimId: number) {
        const readTerminationInterim = await TerminationInterim.query()
            .where('active', true)
            .where('id', terminationInterimId)
            .preload('terminationInterimProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readTerminationInterim;
    }

    public async addTerminationInterim(payload) {
        return this.createData(TerminationInterim, payload, 'Admin');
    }

    public async editTerminationInterim(id: number, payload) {
        return this.updateData(TerminationInterim, id, payload, 'Admin');
    }
}
