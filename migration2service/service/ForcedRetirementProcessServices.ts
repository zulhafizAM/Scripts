import BaseService from 'App/Services/BaseService';
import ForcedRetirementProcess from 'App/Models/ForcedRetirementProcess';

export default class ForcedRetirementProcessServices extends BaseService {
    public async getForcedRetirementProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(ForcedRetirementProcess, { page, perPage });
    }

    public async getForcedRetirementProcess(forcedRetirementProcessId: number) {
        const readForcedRetirementProcess = await ForcedRetirementProcess.query()
            .where('active', true)
            .where('id', forcedRetirementProcessId)
            .preload('forced', (query) => query.where('active', true))
            .preload('certifier', (query) => query.where('active', true))
            .preload('confirmer', (query) => query.where('active', true))
            .firstOrFail();

        return readForcedRetirementProcess;
    }

    public async addForcedRetirementProcess(payload) {
        return this.createData(ForcedRetirementProcess, payload, 'Admin');
    }

    public async editForcedRetirementProcess(id: number, payload) {
        return this.updateData(ForcedRetirementProcess, id, payload, 'Admin');
    }
}
