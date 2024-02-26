import BaseService from 'App/Services/BaseService';
import Dependent from 'App/Models/Dependent';

export default class DependentServices extends BaseService {
    public async getDependents({ page = 1, perPage = 10 }) {
        return this.getDataList(Dependent, { page, perPage });
    }

    public async getDependent(dependentId: number) {
        const readDependent = await Dependent.query()
            .where('active', true)
            .where('id', dependentId)
            .preload('personalDetail', (query) => query.where('active', true))
            .firstOrFail();

        return readDependent;
    }

    public async addDependent(payload) {
        return this.createData(Dependent, payload, 'Admin');
    }

    public async editDependent(id: number, payload) {
        return this.updateData(Dependent, id, payload, 'Admin');
    }
}
