import BaseService from 'App/Services/BaseService';
import ChecklistInterim from 'App/Models/ChecklistInterim';

export default class ChecklistInterimServices extends BaseService {
    public async getChecklistInterims({ page = 1, perPage = 10 }) {
        return this.getDataList(ChecklistInterim, { page, perPage });
    }

    public async getChecklistInterim(checklistInterimId: number) {
        const readChecklistInterim = await ChecklistInterim.query()
            .where('active', true)
            .where('id', checklistInterimId)
            .preload('preparer', (query) => query.where('active', true))
            .preload('checker', (query) => query.where('active', true))
            .firstOrFail();

        return readChecklistInterim;
    }

    public async addChecklistInterim(payload) {
        return this.createData(ChecklistInterim, payload, 'Admin');
    }

    public async editChecklistInterim(id: number, payload) {
        return this.updateData(ChecklistInterim, id, payload, 'Admin');
    }
}
