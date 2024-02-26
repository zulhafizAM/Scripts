import BaseService from 'App/Services/BaseService';
import VoluntaryRetirementProcess from 'App/Models/VoluntaryRetirementProcess';

export default class VoluntaryRetirementProcessServices extends BaseService {
    public async getVoluntaryRetirementProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(VoluntaryRetirementProcess, { page, perPage });
    }

    public async getVoluntaryRetirementProcess(voluntaryRetirementProcessId: number) {
        const readVoluntaryRetirementProcess = await VoluntaryRetirementProcess.query()
            .where('active', true)
            .where('id', voluntaryRetirementProcessId)
            .preload('voluntary', (query) => query.where('active', true))
            .preload('certifier', (query) => query.where('active', true))
            .preload('confirmer', (query) => query.where('active', true))
            .preload('supporter1', (query) => query.where('active', true))
            .preload('supporter2', (query) => query.where('active', true))
            .preload('appointedApprover', (query) => query.where('active', true))
            .preload('secretaryApprover', (query) => query.where('active', true))
            .preload('secretaryCertifier', (query) => query.where('active', true))
            .firstOrFail();

        return readVoluntaryRetirementProcess;
    }

    public async addVoluntaryRetirementProcess(payload) {
        return this.createData(VoluntaryRetirementProcess, payload, 'Admin');
    }

    public async editVoluntaryRetirementProcess(id: number, payload) {
        return this.updateData(VoluntaryRetirementProcess, id, payload, 'Admin');
    }
}
