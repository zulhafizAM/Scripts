import BaseService from 'App/Services/BaseService';
import ContractLifeCycleProcess from 'App/Models/ContractLifeCycleProcess';

export default class ContractLifeCycleProcessServices extends BaseService {
    public async getContractLifeCycleProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(ContractLifeCycleProcess, { page, perPage });
    }

    public async getContractLifeCycleProcess(contractLifeCycleProcessId: number) {
        const readContractLifeCycleProcess = await ContractLifeCycleProcess.query()
            .where('active', true)
            .where('id', contractLifeCycleProcessId)
            .preload('lifecycle', (query) => query.where('active', true))
            .preload('certifier', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .preload('confirmer', (query) => query.where('active', true))
            .firstOrFail();

        return readContractLifeCycleProcess;
    }

    public async addContractLifeCycleProcess(payload) {
        return this.createData(ContractLifeCycleProcess, payload, 'Admin');
    }

    public async editContractLifeCycleProcess(id: number, payload) {
        return this.updateData(ContractLifeCycleProcess, id, payload, 'Admin');
    }
}
