import BaseService from 'App/Services/BaseService';
import ServiceConfirmationProcess from 'App/Models/ServiceConfirmationProcess';

export default class ServiceConfirmationProcessServices extends BaseService {
    public async getServiceConfirmationProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(ServiceConfirmationProcess, { page, perPage });
    }

    public async getServiceConfirmationProcess(serviceConfirmationProcessId: number) {
        const readServiceConfirmationProcess = await ServiceConfirmationProcess.query()
            .where('active', true)
            .where('id', serviceConfirmationProcessId)
            .preload('integrityCertifier', (query) => query.where('active', true))
            .preload('directorCertifier', (query) => query.where('active', true))
            .firstOrFail();

        return readServiceConfirmationProcess;
    }

    public async addServiceConfirmationProcess(payload) {
        return this.createData(ServiceConfirmationProcess, payload, 'Admin');
    }

    public async editServiceConfirmationProcess(id: number, payload) {
        return this.updateData(ServiceConfirmationProcess, id, payload, 'Admin');
    }
}
