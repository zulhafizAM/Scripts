import BaseService from 'App/Services/BaseService';
import WithoutPayLeave from 'App/Models/WithoutPayLeave';

export default class WithoutPayLeaveServices extends BaseService {
    public async getWithoutPayLeaves({ page = 1, perPage = 10 }) {
        return this.getDataList(WithoutPayLeave, { page, perPage });
    }

    public async getWithoutPayLeave(withoutPayLeaveId: number) {
        const readWithoutPayLeave = await WithoutPayLeave.query()
            .where('active', true)
            .where('id', withoutPayLeaveId)
            .preload('employee', (query) => query.where('active', true))
            .preload('meeting', (query) => query.where('active', true))
            .preload('withoutPayLeaveProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readWithoutPayLeave;
    }

    public async addWithoutPayLeave(payload) {
        return this.createData(WithoutPayLeave, payload, 'Admin');
    }

    public async editWithoutPayLeave(id: number, payload) {
        return this.updateData(WithoutPayLeave, id, payload, 'Admin');
    }
}
