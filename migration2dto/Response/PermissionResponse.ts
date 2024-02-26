import { DateTime } from 'luxon';

export default class GetPermissionResponse {
    public permission: PermissionResponse =
        new PermissionResponse();
}
export class PermissionResponse {
    public action: string = '';
    public module: string = '';
    public resource: string = '';

    public getFull(data) {
        this.action = data.action;
        this.module = data.module;
        this.resource = data.resource;
    }
}