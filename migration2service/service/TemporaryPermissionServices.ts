import BaseService from 'App/Services/BaseService';
import TemporaryPermission from 'App/Models/TemporaryPermission';

export default class TemporaryPermissionServices extends BaseService {
    public async getTemporaryPermissions({ page = 1, perPage = 10 }) {
        return this.getDataList(TemporaryPermission, { page, perPage });
    }

    public async getTemporaryPermission(temporaryPermissionId: number) {
        const readTemporaryPermission = await TemporaryPermission.query()
            .where('active', true)
            .where('id', temporaryPermissionId)
            .preload('employee', (query) => query.where('active', true))
            .preload('role', (query) => query.where('active', true))
            .preload('permission', (query) => query.where('active', true))
            .firstOrFail();

        return readTemporaryPermission;
    }

    public async addTemporaryPermission(payload) {
        return this.createData(TemporaryPermission, payload, 'Admin');
    }

    public async editTemporaryPermission(id: number, payload) {
        return this.updateData(TemporaryPermission, id, payload, 'Admin');
    }
}
