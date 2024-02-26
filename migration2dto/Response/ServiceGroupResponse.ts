import { DateTime } from 'luxon';

export default class GetServiceGroupResponse {
    public serviceGroup: ServiceGroupResponse =
        new ServiceGroupResponse();
}
export class ServiceGroupResponse {
    public name: string = '';

    public getFull(data) {
        this.name = data.name;
    }
}