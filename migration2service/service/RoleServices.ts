import BaseService from 'App/Services/BaseService';
import Role from 'App/Models/Role';

export default class RoleServices extends BaseService {
    public async getRoles({ page = 1, perPage = 10 }) {
        return this.getDataList(Role, { page, perPage });
    }

    public async getRole(roleId: number) {
        const readRole = await Role.query()
            .where('active', true)
            .where('id', roleId)
            .firstOrFail();

        return readRole;
    }

    public async addRole(payload) {
        return this.createData(Role, payload, 'Admin');
    }

    public async editRole(id: number, payload) {
        return this.updateData(Role, id, payload, 'Admin');
    }
}
