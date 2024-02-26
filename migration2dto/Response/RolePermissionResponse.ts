import { DateTime } from 'luxon';

export default class GetRolePermissionResponse {
    public rolePermission: RolePermissionResponse =
        new RolePermissionResponse();
}
export class RolePermissionResponse {
    public roleId: bigint;
    public permissionId: bigint;

    public getFull(data) {
        this.roleId = data.roleId;
        this.permissionId = data.permissionId;
    }
}