import BaseService from 'App/Services/BaseService';
import ForcedByManagementProcess from 'App/Models/ForcedByManagementProcess';

export default class ForcedByManagementProcessServices extends BaseService {
    public async getForcedByManagementProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(ForcedByManagementProcess, { page, perPage });
    }

    public async getForcedByManagementProcess(forcedByManagementProcessId: number) {
        const readForcedByManagementProcess = await ForcedByManagementProcess.query()
            .where('active', true)
            .where('id', forcedByManagementProcessId)
            .preload('force', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readForcedByManagementProcess;
    }

    public async addForcedByManagementProcess(payload) {
        return this.createData(ForcedByManagementProcess, payload, 'Admin');
    }

    public async editForcedByManagementProcess(id: number, payload) {
        return this.updateData(ForcedByManagementProcess, id, payload, 'Admin');
    }
}
