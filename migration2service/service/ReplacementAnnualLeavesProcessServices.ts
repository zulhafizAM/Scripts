import BaseService from 'App/Services/BaseService';
import ReplacementAnnualLeavesProcess from 'App/Models/ReplacementAnnualLeavesProcess';

export default class ReplacementAnnualLeavesProcessServices extends BaseService {
    public async getReplacementAnnualLeavesProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(ReplacementAnnualLeavesProcess, { page, perPage });
    }

    public async getReplacementAnnualLeavesProcess(replacementAnnualLeavesProcessId: number) {
        const readReplacementAnnualLeavesProcess = await ReplacementAnnualLeavesProcess.query()
            .where('active', true)
            .where('id', replacementAnnualLeavesProcessId)
            .preload('replacement', (query) => query.where('active', true))
            .preload('directorSupporter', (query) => query.where('active', true))
            .preload('certifier', (query) => query.where('active', true))
            .preload('appointedSupporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readReplacementAnnualLeavesProcess;
    }

    public async addReplacementAnnualLeavesProcess(payload) {
        return this.createData(ReplacementAnnualLeavesProcess, payload, 'Admin');
    }

    public async editReplacementAnnualLeavesProcess(id: number, payload) {
        return this.updateData(ReplacementAnnualLeavesProcess, id, payload, 'Admin');
    }
}
