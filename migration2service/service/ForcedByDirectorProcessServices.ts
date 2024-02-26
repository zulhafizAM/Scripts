import BaseService from 'App/Services/BaseService';
import ForcedByDirectorProcess from 'App/Models/ForcedByDirectorProcess';

export default class ForcedByDirectorProcessServices extends BaseService {
    public async getForcedByDirectorProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(ForcedByDirectorProcess, { page, perPage });
    }

    public async getForcedByDirectorProcess(forcedByDirectorProcessId: number) {
        const readForcedByDirectorProcess = await ForcedByDirectorProcess.query()
            .where('active', true)
            .where('id', forcedByDirectorProcessId)
            .preload('force', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readForcedByDirectorProcess;
    }

    public async addForcedByDirectorProcess(payload) {
        return this.createData(ForcedByDirectorProcess, payload, 'Admin');
    }

    public async editForcedByDirectorProcess(id: number, payload) {
        return this.updateData(ForcedByDirectorProcess, id, payload, 'Admin');
    }
}
