import BaseService from 'App/Services/BaseService';
import Sentencing from 'App/Models/Sentencing';

export default class SentencingServices extends BaseService {
    public async getSentencings({ page = 1, perPage = 10 }) {
        return this.getDataList(Sentencing, { page, perPage });
    }

    public async getSentencing(sentencingId: number) {
        const readSentencing = await Sentencing.query()
            .where('active', true)
            .where('id', sentencingId)
            .preload('integrity', (query) => query.where('active', true))
            .preload('penaltyType', (query) => query.where('active', true))
            .firstOrFail();

        return readSentencing;
    }

    public async addSentencing(payload) {
        return this.createData(Sentencing, payload, 'Admin');
    }

    public async editSentencing(id: number, payload) {
        return this.updateData(Sentencing, id, payload, 'Admin');
    }
}
