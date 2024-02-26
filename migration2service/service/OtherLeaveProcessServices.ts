import BaseService from 'App/Services/BaseService';
import OtherLeaveProcess from 'App/Models/OtherLeaveProcess';

export default class OtherLeaveProcessServices extends BaseService {
    public async getOtherLeaveProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(OtherLeaveProcess, { page, perPage });
    }

    public async getOtherLeaveProcess(otherLeaveProcessId: number) {
        const readOtherLeaveProcess = await OtherLeaveProcess.query()
            .where('active', true)
            .where('id', otherLeaveProcessId)
            .preload('other', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('confirmer', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readOtherLeaveProcess;
    }

    public async addOtherLeaveProcess(payload) {
        return this.createData(OtherLeaveProcess, payload, 'Admin');
    }

    public async editOtherLeaveProcess(id: number, payload) {
        return this.updateData(OtherLeaveProcess, id, payload, 'Admin');
    }
}
