import BaseService from 'App/Services/BaseService';
import ComputerLoanProcess from 'App/Models/ComputerLoanProcess';

export default class ComputerLoanProcessServices extends BaseService {
    public async getComputerLoanProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(ComputerLoanProcess, { page, perPage });
    }

    public async getComputerLoanProcess(computerLoanProcessId: number) {
        const readComputerLoanProcess = await ComputerLoanProcess.query()
            .where('active', true)
            .where('id', computerLoanProcessId)
            .preload('computerLoan', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readComputerLoanProcess;
    }

    public async addComputerLoanProcess(payload) {
        return this.createData(ComputerLoanProcess, payload, 'Admin');
    }

    public async editComputerLoanProcess(id: number, payload) {
        return this.updateData(ComputerLoanProcess, id, payload, 'Admin');
    }
}
