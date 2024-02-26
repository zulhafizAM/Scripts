import BaseService from 'App/Services/BaseService';
import ServiceGroup from 'App/Models/ServiceGroup';

export default class ServiceGroupServices extends BaseService {
    public async getServiceGroups({ page = 1, perPage = 10 }) {
        return this.getDataList(ServiceGroup, { page, perPage });
    }

    public async getServiceGroup(serviceGroupId: number) {
        const readServiceGroup = await ServiceGroup.query()
            .where('active', true)
            .where('id', serviceGroupId)
            .preload('employees', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readServiceGroup;
    }

    public async addServiceGroup(payload) {
        return this.createData(ServiceGroup, payload, 'Admin');
    }

    public async editServiceGroup(id: number, payload) {
        return this.updateData(ServiceGroup, id, payload, 'Admin');
    }
}
