import BaseService from 'App/Services/BaseService';
import WithdrawalAnnualLeave from 'App/Models/WithdrawalAnnualLeave';

export default class WithdrawalAnnualLeaveServices extends BaseService {
    public async getWithdrawalAnnualLeaves({ page = 1, perPage = 10 }) {
        return this.getDataList(WithdrawalAnnualLeave, { page, perPage });
    }

    public async getWithdrawalAnnualLeave(withdrawalAnnualLeaveId: number) {
        const readWithdrawalAnnualLeave = await WithdrawalAnnualLeave.query()
            .where('active', true)
            .where('id', withdrawalAnnualLeaveId)
            .preload('employee', (query) => query.where('active', true))
            .preload('withdrawalAnnualLeaveProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readWithdrawalAnnualLeave;
    }

    public async addWithdrawalAnnualLeave(payload) {
        return this.createData(WithdrawalAnnualLeave, payload, 'Admin');
    }

    public async editWithdrawalAnnualLeave(id: number, payload) {
        return this.updateData(WithdrawalAnnualLeave, id, payload, 'Admin');
    }
}
