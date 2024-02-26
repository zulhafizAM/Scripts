import BaseService from 'App/Services/BaseService';
import ServiceConfirmation from 'App/Models/ServiceConfirmation';

export default class ServiceConfirmationServices extends BaseService {
    public async getServiceConfirmations({ page = 1, perPage = 10 }) {
        return this.getDataList(ServiceConfirmation, { page, perPage });
    }

    public async getServiceConfirmation(serviceConfirmationId: number) {
        const readServiceConfirmation = await ServiceConfirmation.query()
            .where('active', true)
            .where('id', serviceConfirmationId)
            .preload('employee', (query) => query.where('active', true))
            .preload('meeting', (query) => query.where('active', true))
            .preload('serviceConfirmationProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readServiceConfirmation;
    }

    public async addServiceConfirmation(payload) {
        return this.createData(ServiceConfirmation, payload, 'Admin');
    }

    public async editServiceConfirmation(id: number, payload) {
        return this.updateData(ServiceConfirmation, id, payload, 'Admin');
    }
}
