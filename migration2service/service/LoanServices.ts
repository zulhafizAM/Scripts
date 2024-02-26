import BaseService from 'App/Services/BaseService';
import Loan from 'App/Models/Loan';

export default class LoanServices extends BaseService {
    public async getLoans({ page = 1, perPage = 10 }) {
        return this.getDataList(Loan, { page, perPage });
    }

    public async getLoan(loanId: number) {
        const readLoan = await Loan.query()
            .where('active', true)
            .where('id', loanId)
            .preload('deduction', (query) => query.where('active', true))
            .preload('computerLoans', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('vehicleLoans', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readLoan;
    }

    public async addLoan(payload) {
        return this.createData(Loan, payload, 'Admin');
    }

    public async editLoan(id: number, payload) {
        return this.updateData(Loan, id, payload, 'Admin');
    }
}
