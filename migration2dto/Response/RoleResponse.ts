import { DateTime } from 'luxon';

export default class GetRoleResponse {
    public role: RoleResponse =
        new RoleResponse();
}
export class RoleResponse {
    public name: string = '';

    public getFull(data) {
        this.name = data.name;
    }
}