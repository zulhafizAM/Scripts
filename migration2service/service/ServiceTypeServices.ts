import BaseService from 'App/Services/BaseService';
import ServiceType from 'App/Models/ServiceType';

export default class ServiceTypeServices extends BaseService {
    public async getServiceTypes({ page = 1, perPage = 10 }) {
        return this.getDataList(ServiceType, { page, perPage });
    }

    public async getServiceType(serviceTypeId: number) {
        const readServiceType = await ServiceType.query()
            .where('active', true)
            .where('id', serviceTypeId)
            .preload('employees', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('contractDetails', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readServiceType;
    }

    public async addServiceType(payload) {
        return this.createData(ServiceType, payload, 'Admin');
    }

    public async editServiceType(id: number, payload) {
        return this.updateData(ServiceType, id, payload, 'Admin');
    }
}
