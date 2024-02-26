import BaseService from 'App/Services/BaseService';
import ContractAppointmentsProcess from 'App/Models/ContractAppointmentsProcess';

export default class ContractAppointmentsProcessServices extends BaseService {
    public async getContractAppointmentsProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(ContractAppointmentsProcess, { page, perPage });
    }

    public async getContractAppointmentsProcess(contractAppointmentsProcessId: number) {
        const readContractAppointmentsProcess = await ContractAppointmentsProcess.query()
            .where('active', true)
            .where('id', contractAppointmentsProcessId)
            .preload('contract', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readContractAppointmentsProcess;
    }

    public async addContractAppointmentsProcess(payload) {
        return this.createData(ContractAppointmentsProcess, payload, 'Admin');
    }

    public async editContractAppointmentsProcess(id: number, payload) {
        return this.updateData(ContractAppointmentsProcess, id, payload, 'Admin');
    }
}
