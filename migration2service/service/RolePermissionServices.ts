import BaseService from 'App/Services/BaseService';
import RolePermission from 'App/Models/RolePermission';

export default class RolePermissionServices extends BaseService {
    public async getRolePermissions({ page = 1, perPage = 10 }) {
        return this.getDataList(RolePermission, { page, perPage });
    }

    public async getRolePermission(rolePermissionId: number) {
        const readRolePermission = await RolePermission.query()
            .where('active', true)
            .where('id', rolePermissionId)
            .preload('role', (query) => query.where('active', true))
            .preload('permission', (query) => query.where('active', true))
            .firstOrFail();

        return readRolePermission;
    }

    public async addRolePermission(payload) {
        return this.createData(RolePermission, payload, 'Admin');
    }

    public async editRolePermission(id: number, payload) {
        return this.updateData(RolePermission, id, payload, 'Admin');
    }
}
