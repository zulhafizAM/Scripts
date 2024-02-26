import BaseService from 'App/Services/BaseService';
import ForceTransferByManagement from 'App/Models/ForceTransferByManagement';

export default class ForceTransferByManagementServices extends BaseService {
    public async getForceTransferByManagements({ page = 1, perPage = 10 }) {
        return this.getDataList(ForceTransferByManagement, { page, perPage });
    }

    public async getForceTransferByManagement(forceTransferByManagementId: number) {
        const readForceTransferByManagement = await ForceTransferByManagement.query()
            .where('active', true)
            .where('id', forceTransferByManagementId)
            .preload('employee', (query) => query.where('active', true))
            .preload('newPlacement', (query) => query.where('active', true))
            .preload('forcedByManagementProcess', (query) => query.where('active', true))
            .preload('forcedByManagementPostponeProcesses', (query) => query.where('active', true))
            .firstOrFail();

        return readForceTransferByManagement;
    }

    public async addForceTransferByManagement(payload) {
        return this.createData(ForceTransferByManagement, payload, 'Admin');
    }

    public async editForceTransferByManagement(id: number, payload) {
        return this.updateData(ForceTransferByManagement, id, payload, 'Admin');
    }
}
