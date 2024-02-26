import BaseService from 'App/Services/BaseService';
import MaternityLeaveProcess from 'App/Models/MaternityLeaveProcess';

export default class MaternityLeaveProcessServices extends BaseService {
    public async getMaternityLeaveProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(MaternityLeaveProcess, { page, perPage });
    }

    public async getMaternityLeaveProcess(maternityLeaveProcessId: number) {
        const readMaternityLeaveProcess = await MaternityLeaveProcess.query()
            .where('active', true)
            .where('id', maternityLeaveProcessId)
            .preload('maternityLeave', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readMaternityLeaveProcess;
    }

    public async addMaternityLeaveProcess(payload) {
        return this.createData(MaternityLeaveProcess, payload, 'Admin');
    }

    public async editMaternityLeaveProcess(id: number, payload) {
        return this.updateData(MaternityLeaveProcess, id, payload, 'Admin');
    }
}
