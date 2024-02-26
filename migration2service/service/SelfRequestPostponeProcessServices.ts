import BaseService from 'App/Services/BaseService';
import SelfRequestPostponeProcess from 'App/Models/SelfRequestPostponeProcess';

export default class SelfRequestPostponeProcessServices extends BaseService {
    public async getSelfRequestPostponeProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(SelfRequestPostponeProcess, { page, perPage });
    }

    public async getSelfRequestPostponeProcess(selfRequestPostponeProcessId: number) {
        const readSelfRequestPostponeProcess = await SelfRequestPostponeProcess.query()
            .where('active', true)
            .where('id', selfRequestPostponeProcessId)
            .preload('employee', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readSelfRequestPostponeProcess;
    }

    public async addSelfRequestPostponeProcess(payload) {
        return this.createData(SelfRequestPostponeProcess, payload, 'Admin');
    }

    public async editSelfRequestPostponeProcess(id: number, payload) {
        return this.updateData(SelfRequestPostponeProcess, id, payload, 'Admin');
    }
}
