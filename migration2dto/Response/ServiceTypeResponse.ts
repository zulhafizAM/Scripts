import { DateTime } from 'luxon';

export default class GetServiceTypeResponse {
    public serviceType: ServiceTypeResponse =
        new ServiceTypeResponse();
}
export class ServiceTypeResponse {
    public name: string = '';

    public getFull(data) {
        this.name = data.name;
    }
}