import { DateTime } from 'luxon';

export default class GetTemporaryPermissionResponse {
    public temporaryPermission: TemporaryPermissionResponse =
        new TemporaryPermissionResponse();
}
export class TemporaryPermissionResponse {
    public employeeId: bigint;
    public roleId: bigint;
    public permissionId: bigint;

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.roleId = data.roleId;
        this.permissionId = data.permissionId;
    }
}