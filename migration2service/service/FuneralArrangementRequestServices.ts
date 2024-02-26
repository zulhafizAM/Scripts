import BaseService from 'App/Services/BaseService';
import FuneralArrangementRequest from 'App/Models/FuneralArrangementRequest';

export default class FuneralArrangementRequestServices extends BaseService {
    public async getFuneralArrangementRequests({ page = 1, perPage = 10 }) {
        return this.getDataList(FuneralArrangementRequest, { page, perPage });
    }

    public async getFuneralArrangementRequest(funeralArrangementRequestId: number) {
        const readFuneralArrangementRequest = await FuneralArrangementRequest.query()
            .where('active', true)
            .where('id', funeralArrangementRequestId)
            .preload('allowance', (query) => query.where('active', true))
            .preload('funeralArrangementProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readFuneralArrangementRequest;
    }

    public async addFuneralArrangementRequest(payload) {
        return this.createData(FuneralArrangementRequest, payload, 'Admin');
    }

    public async editFuneralArrangementRequest(id: number, payload) {
        return this.updateData(FuneralArrangementRequest, id, payload, 'Admin');
    }
}
