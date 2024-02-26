import BaseService from 'App/Services/BaseService';
import WithdrawalAnnualLeaveProcess from 'App/Models/WithdrawalAnnualLeaveProcess';

export default class WithdrawalAnnualLeaveProcessServices extends BaseService {
    public async getWithdrawalAnnualLeaveProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(WithdrawalAnnualLeaveProcess, { page, perPage });
    }

    public async getWithdrawalAnnualLeaveProcess(withdrawalAnnualLeaveProcessId: number) {
        const readWithdrawalAnnualLeaveProcess = await WithdrawalAnnualLeaveProcess.query()
            .where('active', true)
            .where('id', withdrawalAnnualLeaveProcessId)
            .preload('withdrawalLeave', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('confirmer', (query) => query.where('active', true))
            .preload('certifier', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readWithdrawalAnnualLeaveProcess;
    }

    public async addWithdrawalAnnualLeaveProcess(payload) {
        return this.createData(WithdrawalAnnualLeaveProcess, payload, 'Admin');
    }

    public async editWithdrawalAnnualLeaveProcess(id: number, payload) {
        return this.updateData(WithdrawalAnnualLeaveProcess, id, payload, 'Admin');
    }
}
