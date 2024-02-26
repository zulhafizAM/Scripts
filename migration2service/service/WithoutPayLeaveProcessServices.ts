import BaseService from 'App/Services/BaseService';
import WithoutPayLeaveProcess from 'App/Models/WithoutPayLeaveProcess';

export default class WithoutPayLeaveProcessServices extends BaseService {
    public async getWithoutPayLeaveProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(WithoutPayLeaveProcess, { page, perPage });
    }

    public async getWithoutPayLeaveProcess(withoutPayLeaveProcessId: number) {
        const readWithoutPayLeaveProcess = await WithoutPayLeaveProcess.query()
            .where('active', true)
            .where('id', withoutPayLeaveProcessId)
            .preload('withoutPayLeave', (query) => query.where('active', true))
            .preload('directorSupporter', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('confirmer', (query) => query.where('active', true))
            .preload('appointedSupporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readWithoutPayLeaveProcess;
    }

    public async addWithoutPayLeaveProcess(payload) {
        return this.createData(WithoutPayLeaveProcess, payload, 'Admin');
    }

    public async editWithoutPayLeaveProcess(id: number, payload) {
        return this.updateData(WithoutPayLeaveProcess, id, payload, 'Admin');
    }
}
