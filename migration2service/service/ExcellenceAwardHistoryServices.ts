import BaseService from 'App/Services/BaseService';
import ExcellenceAwardHistory from 'App/Models/ExcellenceAwardHistory';

export default class ExcellenceAwardHistoryServices extends BaseService {
    public async getExcellenceAwardHistories({ page = 1, perPage = 10 }) {
        return this.getDataList(ExcellenceAwardHistory, { page, perPage });
    }

    public async getExcellenceAwardHistory(excellenceAwardHistoryId: number) {
        const readExcellenceAwardHistory = await ExcellenceAwardHistory.query()
            .where('active', true)
            .where('id', excellenceAwardHistoryId)
            .preload('employee', (query) => query.where('active', true))
            .firstOrFail();

        return readExcellenceAwardHistory;
    }

    public async addExcellenceAwardHistory(payload) {
        return this.createData(ExcellenceAwardHistory, payload, 'Admin');
    }

    public async editExcellenceAwardHistory(id: number, payload) {
        return this.updateData(ExcellenceAwardHistory, id, payload, 'Admin');
    }
}
