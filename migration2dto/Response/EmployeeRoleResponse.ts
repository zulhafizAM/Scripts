import { DateTime } from 'luxon';

export default class GetEmployeeRoleResponse {
    public employeeRole: EmployeeRoleResponse =
        new EmployeeRoleResponse();
}
export class EmployeeRoleResponse {
    public employeeId: bigint;
    public roleId: bigint;

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.roleId = data.roleId;
    }
}