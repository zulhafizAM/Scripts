import BaseService from 'App/Services/BaseService';
import FundApplicationProcess from 'App/Models/FundApplicationProcess';

export default class FundApplicationProcessServices extends BaseService {
    public async getFundApplicationProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(FundApplicationProcess, { page, perPage });
    }

    public async getFundApplicationProcess(fundApplicationProcessId: number) {
        const readFundApplicationProcess = await FundApplicationProcess.query()
            .where('active', true)
            .where('id', fundApplicationProcessId)
            .preload('fund', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('certifier', (query) => query.where('active', true))
            .preload('confirmer', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .firstOrFail();

        return readFundApplicationProcess;
    }

    public async addFundApplicationProcess(payload) {
        return this.createData(FundApplicationProcess, payload, 'Admin');
    }

    public async editFundApplicationProcess(id: number, payload) {
        return this.updateData(FundApplicationProcess, id, payload, 'Admin');
    }
}
