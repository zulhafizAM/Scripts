import BaseService from 'App/Services/BaseService';
import SalaryDeduction from 'App/Models/SalaryDeduction';

export default class SalaryDeductionServices extends BaseService {
    public async getSalaryDeductions({ page = 1, perPage = 10 }) {
        return this.getDataList(SalaryDeduction, { page, perPage });
    }

    public async getSalaryDeduction(salaryDeductionId: number) {
        const readSalaryDeduction = await SalaryDeduction.query()
            .where('active', true)
            .where('id', salaryDeductionId)
            .preload('salaryDetail', (query) => query.where('active', true))
            .preload('quarter', (query) => query.where('active', true))
            .preload('loans', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readSalaryDeduction;
    }

    public async addSalaryDeduction(payload) {
        return this.createData(SalaryDeduction, payload, 'Admin');
    }

    public async editSalaryDeduction(id: number, payload) {
        return this.updateData(SalaryDeduction, id, payload, 'Admin');
    }
}
