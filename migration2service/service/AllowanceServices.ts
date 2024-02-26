import BaseService from 'App/Services/BaseService';
import Allowance from 'App/Models/Allowance';

export default class AllowanceServices extends BaseService {
    public async getAllowances({ page = 1, perPage = 10 }) {
        return this.getDataList(Allowance, { page, perPage });
    }

    public async getAllowance(allowanceId: number) {
        const readAllowance = await Allowance.query()
            .where('active', true)
            .where('id', allowanceId)
            .preload('salaryDetail', (query) => query.where('active', true))
            .preload('serviceAllowance', (query) => query.where('active', true))
            .firstOrFail();

        return readAllowance;
    }

    public async addAllowance(payload) {
        return this.createData(Allowance, payload, 'Admin');
    }

    public async editAllowance(id: number, payload) {
        return this.updateData(Allowance, id, payload, 'Admin');
    }
}
