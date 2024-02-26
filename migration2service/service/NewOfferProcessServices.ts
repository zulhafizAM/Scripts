import BaseService from 'App/Services/BaseService';
import NewOfferProcess from 'App/Models/NewOfferProcess';

export default class NewOfferProcessServices extends BaseService {
    public async getNewOfferProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(NewOfferProcess, { page, perPage });
    }

    public async getNewOfferProcess(newOfferProcessId: number) {
        const readNewOfferProcess = await NewOfferProcess.query()
            .where('active', true)
            .where('id', newOfferProcessId)
            .preload('newOffer', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readNewOfferProcess;
    }

    public async addNewOfferProcess(payload) {
        return this.createData(NewOfferProcess, payload, 'Admin');
    }

    public async editNewOfferProcess(id: number, payload) {
        return this.updateData(NewOfferProcess, id, payload, 'Admin');
    }
}
