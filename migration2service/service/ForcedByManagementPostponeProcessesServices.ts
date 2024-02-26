import BaseService from 'App/Services/BaseService';
import ForcedByManagementPostponeProcesses from 'App/Models/ForcedByManagementPostponeProcesses';

export default class ForcedByManagementPostponeProcessesServices extends BaseService {
    public async getForcedByManagementPostponeProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(ForcedByManagementPostponeProcesses, { page, perPage });
    }

    public async getForcedByManagementPostponeProcesses(forcedByManagementPostponeProcessesId: number) {
        const readForcedByManagementPostponeProcesses = await ForcedByManagementPostponeProcesses.query()
            .where('active', true)
            .where('id', forcedByManagementPostponeProcessesId)
            .preload('force', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readForcedByManagementPostponeProcesses;
    }

    public async addForcedByManagementPostponeProcesses(payload) {
        return this.createData(ForcedByManagementPostponeProcesses, payload, 'Admin');
    }

    public async editForcedByManagementPostponeProcesses(id: number, payload) {
        return this.updateData(ForcedByManagementPostponeProcesses, id, payload, 'Admin');
    }
}
