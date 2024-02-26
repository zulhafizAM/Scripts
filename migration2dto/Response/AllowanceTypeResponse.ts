import { DateTime } from 'luxon';

export default class GetAllowanceTypeResponse {
    public allowanceType: AllowanceTypeResponse =
        new AllowanceTypeResponse();
}
export class AllowanceTypeResponse {
    public name: string = '';

    public getFull(data) {
        this.name = data.name;
    }
}