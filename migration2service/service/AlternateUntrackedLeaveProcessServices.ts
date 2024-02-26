import BaseService from 'App/Services/BaseService';
import AlternateUntrackedLeaveProcess from 'App/Models/AlternateUntrackedLeaveProcess';

export default class AlternateUntrackedLeaveProcessServices extends BaseService {
    public async getAlternateUntrackedLeaveProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(AlternateUntrackedLeaveProcess, { page, perPage });
    }

    public async getAlternateUntrackedLeaveProcess(alternateUntrackedLeaveProcessId: number) {
        const readAlternateUntrackedLeaveProcess = await AlternateUntrackedLeaveProcess.query()
            .where('active', true)
            .where('id', alternateUntrackedLeaveProcessId)
            .preload('alternateUntrackedLeave', (query) => query.where('active', true))
            .preload('directorSupporter', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('confirmer', (query) => query.where('active', true))
            .preload('appointedSupporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readAlternateUntrackedLeaveProcess;
    }

    public async addAlternateUntrackedLeaveProcess(payload) {
        return this.createData(AlternateUntrackedLeaveProcess, payload, 'Admin');
    }

    public async editAlternateUntrackedLeaveProcess(id: number, payload) {
        return this.updateData(AlternateUntrackedLeaveProcess, id, payload, 'Admin');
    }
}
