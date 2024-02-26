import BaseService from 'App/Services/BaseService';
import RemoteReligiousLeaveProcess from 'App/Models/RemoteReligiousLeaveProcess';

export default class RemoteReligiousLeaveProcessServices extends BaseService {
    public async getRemoteReligiousLeaveProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(RemoteReligiousLeaveProcess, { page, perPage });
    }

    public async getRemoteReligiousLeaveProcess(remoteReligiousLeaveProcessId: number) {
        const readRemoteReligiousLeaveProcess = await RemoteReligiousLeaveProcess.query()
            .where('active', true)
            .where('id', remoteReligiousLeaveProcessId)
            .preload('remoteReligious', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readRemoteReligiousLeaveProcess;
    }

    public async addRemoteReligiousLeaveProcess(payload) {
        return this.createData(RemoteReligiousLeaveProcess, payload, 'Admin');
    }

    public async editRemoteReligiousLeaveProcess(id: number, payload) {
        return this.updateData(RemoteReligiousLeaveProcess, id, payload, 'Admin');
    }
}
