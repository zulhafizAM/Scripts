import BaseService from 'App/Services/BaseService';
import HalfPayLeaveProcess from 'App/Models/HalfPayLeaveProcess';

export default class HalfPayLeaveProcessServices extends BaseService {
    public async getHalfPayLeaveProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(HalfPayLeaveProcess, { page, perPage });
    }

    public async getHalfPayLeaveProcess(halfPayLeaveProcessId: number) {
        const readHalfPayLeaveProcess = await HalfPayLeaveProcess.query()
            .where('active', true)
            .where('id', halfPayLeaveProcessId)
            .preload('halfPayLeave', (query) => query.where('active', true))
            .preload('directorSupporter', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('confirmer', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readHalfPayLeaveProcess;
    }

    public async addHalfPayLeaveProcess(payload) {
        return this.createData(HalfPayLeaveProcess, payload, 'Admin');
    }

    public async editHalfPayLeaveProcess(id: number, payload) {
        return this.updateData(HalfPayLeaveProcess, id, payload, 'Admin');
    }
}
