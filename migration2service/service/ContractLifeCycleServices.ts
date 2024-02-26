import BaseService from 'App/Services/BaseService';
import ContractLifeCycle from 'App/Models/ContractLifeCycle';

export default class ContractLifeCycleServices extends BaseService {
    public async getContractLifeCycles({ page = 1, perPage = 10 }) {
        return this.getDataList(ContractLifeCycle, { page, perPage });
    }

    public async getContractLifeCycle(contractLifeCycleId: number) {
        const readContractLifeCycle = await ContractLifeCycle.query()
            .where('active', true)
            .where('id', contractLifeCycleId)
            .preload('contract', (query) => query.where('active', true))
            .preload('meeting', (query) => query.where('active', true))
            .preload('contractLifeCycleProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readContractLifeCycle;
    }

    public async addContractLifeCycle(payload) {
        return this.createData(ContractLifeCycle, payload, 'Admin');
    }

    public async editContractLifeCycle(id: number, payload) {
        return this.updateData(ContractLifeCycle, id, payload, 'Admin');
    }
}
