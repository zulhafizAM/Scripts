import BaseService from 'App/Services/BaseService';
import FuneralArrangementProcess from 'App/Models/FuneralArrangementProcess';

export default class FuneralArrangementProcessServices extends BaseService {
    public async getFuneralArrangementProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(FuneralArrangementProcess, { page, perPage });
    }

    public async getFuneralArrangementProcess(funeralArrangementProcessId: number) {
        const readFuneralArrangementProcess = await FuneralArrangementProcess.query()
            .where('active', true)
            .where('id', funeralArrangementProcessId)
            .preload('funeralArrangement', (query) => query.where('active', true))
            .preload('secretaryVerifier', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('confirmer', (query) => query.where('active', true))
            .firstOrFail();

        return readFuneralArrangementProcess;
    }

    public async addFuneralArrangementProcess(payload) {
        return this.createData(FuneralArrangementProcess, payload, 'Admin');
    }

    public async editFuneralArrangementProcess(id: number, payload) {
        return this.updateData(FuneralArrangementProcess, id, payload, 'Admin');
    }
}
