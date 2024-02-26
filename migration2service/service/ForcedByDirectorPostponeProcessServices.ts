import BaseService from 'App/Services/BaseService';
import ForcedByDirectorPostponeProcess from 'App/Models/ForcedByDirectorPostponeProcess';

export default class ForcedByDirectorPostponeProcessServices extends BaseService {
    public async getForcedByDirectorPostponeProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(ForcedByDirectorPostponeProcess, { page, perPage });
    }

    public async getForcedByDirectorPostponeProcess(forcedByDirectorPostponeProcessId: number) {
        const readForcedByDirectorPostponeProcess = await ForcedByDirectorPostponeProcess.query()
            .where('active', true)
            .where('id', forcedByDirectorPostponeProcessId)
            .preload('force', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readForcedByDirectorPostponeProcess;
    }

    public async addForcedByDirectorPostponeProcess(payload) {
        return this.createData(ForcedByDirectorPostponeProcess, payload, 'Admin');
    }

    public async editForcedByDirectorPostponeProcess(id: number, payload) {
        return this.updateData(ForcedByDirectorPostponeProcess, id, payload, 'Admin');
    }
}
