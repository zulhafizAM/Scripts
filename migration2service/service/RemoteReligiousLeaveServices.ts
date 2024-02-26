import BaseService from 'App/Services/BaseService';
import RemoteReligiousLeave from 'App/Models/RemoteReligiousLeave';

export default class RemoteReligiousLeaveServices extends BaseService {
    public async getRemoteReligiousLeaves({ page = 1, perPage = 10 }) {
        return this.getDataList(RemoteReligiousLeave, { page, perPage });
    }

    public async getRemoteReligiousLeave(remoteReligiousLeaveId: number) {
        const readRemoteReligiousLeave = await RemoteReligiousLeave.query()
            .where('active', true)
            .where('id', remoteReligiousLeaveId)
            .preload('employee', (query) => query.where('active', true))
            .preload('remoteReligiousLeaveProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readRemoteReligiousLeave;
    }

    public async addRemoteReligiousLeave(payload) {
        return this.createData(RemoteReligiousLeave, payload, 'Admin');
    }

    public async editRemoteReligiousLeave(id: number, payload) {
        return this.updateData(RemoteReligiousLeave, id, payload, 'Admin');
    }
}
