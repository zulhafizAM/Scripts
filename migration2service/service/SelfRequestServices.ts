import BaseService from 'App/Services/BaseService';
import SelfRequest from 'App/Models/SelfRequest';

export default class SelfRequestServices extends BaseService {
    public async getSelfRequests({ page = 1, perPage = 10 }) {
        return this.getDataList(SelfRequest, { page, perPage });
    }

    public async getSelfRequest(selfRequestId: number) {
        const readSelfRequest = await SelfRequest.query()
            .where('active', true)
            .where('id', selfRequestId)
            .preload('employee', (query) => query.where('active', true))
            .preload('meeting', (query) => query.where('active', true))
            .preload('firstChoicePlacement', (query) => query.where('active', true))
            .preload('secondChoicePlacement', (query) => query.where('active', true))
            .preload('selfRequestProcess', (query) => query.where('active', true))
            .preload('selfRequestPostponeProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readSelfRequest;
    }

    public async addSelfRequest(payload) {
        return this.createData(SelfRequest, payload, 'Admin');
    }

    public async editSelfRequest(id: number, payload) {
        return this.updateData(SelfRequest, id, payload, 'Admin');
    }
}
