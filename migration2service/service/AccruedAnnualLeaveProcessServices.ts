import BaseService from 'App/Services/BaseService';
import AccruedAnnualLeaveProcess from 'App/Models/AccruedAnnualLeaveProcess';

export default class AccruedAnnualLeaveProcessServices extends BaseService {
    public async getAccruedAnnualLeaveProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(AccruedAnnualLeaveProcess, { page, perPage });
    }

    public async getAccruedAnnualLeaveProcess(accruedAnnualLeaveProcessId: number) {
        const readAccruedAnnualLeaveProcess = await AccruedAnnualLeaveProcess.query()
            .where('active', true)
            .where('id', accruedAnnualLeaveProcessId)
            .preload('accruedLeave', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('confirmer', (query) => query.where('active', true))
            .firstOrFail();

        return readAccruedAnnualLeaveProcess;
    }

    public async addAccruedAnnualLeaveProcess(payload) {
        return this.createData(AccruedAnnualLeaveProcess, payload, 'Admin');
    }

    public async editAccruedAnnualLeaveProcess(id: number, payload) {
        return this.updateData(AccruedAnnualLeaveProcess, id, payload, 'Admin');
    }
}
