import BaseService from 'App/Services/BaseService';
import FundReimbursementProcess from 'App/Models/FundReimbursementProcess';

export default class FundReimbursementProcessServices extends BaseService {
    public async getFundReimbursementProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(FundReimbursementProcess, { page, perPage });
    }

    public async getFundReimbursementProcess(fundReimbursementProcessId: number) {
        const readFundReimbursementProcess = await FundReimbursementProcess.query()
            .where('active', true)
            .where('id', fundReimbursementProcessId)
            .preload('fund', (query) => query.where('active', true))
            .preload('confirmer', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .firstOrFail();

        return readFundReimbursementProcess;
    }

    public async addFundReimbursementProcess(payload) {
        return this.createData(FundReimbursementProcess, payload, 'Admin');
    }

    public async editFundReimbursementProcess(id: number, payload) {
        return this.updateData(FundReimbursementProcess, id, payload, 'Admin');
    }
}
