import BaseService from 'App/Services/BaseService';
import ContractDetail from 'App/Models/ContractDetail';

export default class ContractDetailServices extends BaseService {
    public async getContractDetails({ page = 1, perPage = 10 }) {
        return this.getDataList(ContractDetail, { page, perPage });
    }

    public async getContractDetail(contractDetailId: number) {
        const readContractDetail = await ContractDetail.query()
            .where('active', true)
            .where('id', contractDetailId)
            .preload('candidate', (query) => query.where('active', true))
            .preload('serviceType', (query) => query.where('active', true))
            .preload('placement', (query) => query.where('active', true))
            .preload('contractLifeCycle', (query) => query.where('active', true))
            .preload('contractAppointmentsProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readContractDetail;
    }

    public async addContractDetail(payload) {
        return this.createData(ContractDetail, payload, 'Admin');
    }

    public async editContractDetail(id: number, payload) {
        return this.updateData(ContractDetail, id, payload, 'Admin');
    }
}
