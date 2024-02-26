import BaseService from 'App/Services/BaseService';
import SelfRequestProcess from 'App/Models/SelfRequestProcess';

export default class SelfRequestProcessServices extends BaseService {
    public async getSelfRequestProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(SelfRequestProcess, { page, perPage });
    }

    public async getSelfRequestProcess(selfRequestProcessId: number) {
        const readSelfRequestProcess = await SelfRequestProcess.query()
            .where('active', true)
            .where('id', selfRequestProcessId)
            .preload('directorSupporter', (query) => query.where('active', true))
            .preload('appointedSupporter', (query) => query.where('active', true))
            .preload('appointedApprover', (query) => query.where('active', true))
            .firstOrFail();

        return readSelfRequestProcess;
    }

    public async addSelfRequestProcess(payload) {
        return this.createData(SelfRequestProcess, payload, 'Admin');
    }

    public async editSelfRequestProcess(id: number, payload) {
        return this.updateData(SelfRequestProcess, id, payload, 'Admin');
    }
}
