import BaseService from 'App/Services/BaseService';
import NewHire from 'App/Models/NewHire';

export default class NewHireServices extends BaseService {
    public async getNewHires({ page = 1, perPage = 10 }) {
        return this.getDataList(NewHire, { page, perPage });
    }

    public async getNewHire(newHireId: number) {
        const readNewHire = await NewHire.query()
            .where('active', true)
            .where('id', newHireId)
            .preload('employee', (query) => query.where('active', true))
            .preload('candidate', (query) => query.where('active', true))
            .preload('newHiredProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readNewHire;
    }

    public async addNewHire(payload) {
        return this.createData(NewHire, payload, 'Admin');
    }

    public async editNewHire(id: number, payload) {
        return this.updateData(NewHire, id, payload, 'Admin');
    }
}
