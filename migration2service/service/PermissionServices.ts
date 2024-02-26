import BaseService from 'App/Services/BaseService';
import Permission from 'App/Models/Permission';

export default class PermissionServices extends BaseService {
    public async getPermissions({ page = 1, perPage = 10 }) {
        return this.getDataList(Permission, { page, perPage });
    }

    public async getPermission(permissionId: number) {
        const readPermission = await Permission.query()
            .where('active', true)
            .where('id', permissionId)
            .preload('temporaryPermissions', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('rolePermissions', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readPermission;
    }

    public async addPermission(payload) {
        return this.createData(Permission, payload, 'Admin');
    }

    public async editPermission(id: number, payload) {
        return this.updateData(Permission, id, payload, 'Admin');
    }
}
