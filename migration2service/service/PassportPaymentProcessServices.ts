import BaseService from 'App/Services/BaseService';
import PassportPaymentProcess from 'App/Models/PassportPaymentProcess';

export default class PassportPaymentProcessServices extends BaseService {
    public async getPassportPaymentProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(PassportPaymentProcess, { page, perPage });
    }

    public async getPassportPaymentProcess(passportPaymentProcessId: number) {
        const readPassportPaymentProcess = await PassportPaymentProcess.query()
            .where('active', true)
            .where('id', passportPaymentProcessId)
            .preload('passportPayment', (query) => query.where('active', true))
            .preload('directorSupporter', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('appointedSupporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readPassportPaymentProcess;
    }

    public async addPassportPaymentProcess(payload) {
        return this.createData(PassportPaymentProcess, payload, 'Admin');
    }

    public async editPassportPaymentProcess(id: number, payload) {
        return this.updateData(PassportPaymentProcess, id, payload, 'Admin');
    }
}
