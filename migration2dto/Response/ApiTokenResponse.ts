import { DateTime } from 'luxon';

export default class GetApiTokenResponse {
    public apiToken: ApiTokenResponse =
        new ApiTokenResponse();
}
export class ApiTokenResponse {
    public userId: bigint;
    public name: string = '';
    public type: string = '';
    public token: string = '';
    public expiresAt: DateTime;

    public getFull(data) {
        this.userId = data.userId;
        this.name = data.name;
        this.type = data.type;
        this.token = data.token;
        this.expiresAt = data.expiresAt;
    }
}