import BaseService from 'App/Services/BaseService';
import ConfirmationMoreThan3 from 'App/Models/ConfirmationMoreThan3';

export default class ConfirmationMoreThan3Services extends BaseService {
    public async getConfirmationMoreThan3s({ page = 1, perPage = 10 }) {
        return this.getDataList(ConfirmationMoreThan3, { page, perPage });
    }

    public async getConfirmationMoreThan3(confirmationMoreThan3Id: number) {
        const readConfirmationMoreThan3 = await ConfirmationMoreThan3.query()
            .where('active', true)
            .where('id', confirmationMoreThan3Id)
            .preload('employee', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .firstOrFail();

        return readConfirmationMoreThan3;
    }

    public async addConfirmationMoreThan3(payload) {
        return this.createData(ConfirmationMoreThan3, payload, 'Admin');
    }

    public async editConfirmationMoreThan3(id: number, payload) {
        return this.updateData(ConfirmationMoreThan3, id, payload, 'Admin');
    }
}
