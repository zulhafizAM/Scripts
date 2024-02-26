import BaseService from 'App/Services/BaseService';
import ComputerLoan from 'App/Models/ComputerLoan';

export default class ComputerLoanServices extends BaseService {
    public async getComputerLoans({ page = 1, perPage = 10 }) {
        return this.getDataList(ComputerLoan, { page, perPage });
    }

    public async getComputerLoan(computerLoanId: number) {
        const readComputerLoan = await ComputerLoan.query()
            .where('active', true)
            .where('id', computerLoanId)
            .preload('loan', (query) => query.where('active', true))
            .preload('computerLoanProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readComputerLoan;
    }

    public async addComputerLoan(payload) {
        return this.createData(ComputerLoan, payload, 'Admin');
    }

    public async editComputerLoan(id: number, payload) {
        return this.updateData(ComputerLoan, id, payload, 'Admin');
    }
}
