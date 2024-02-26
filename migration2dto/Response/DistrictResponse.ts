import { DateTime } from 'luxon';

export default class GetDistrictResponse {
    public district: DistrictResponse =
        new DistrictResponse();
}
export class DistrictResponse {
    public name: string = '';
    public stateId: bigint;
    public divisionId: bigint;

    public getFull(data) {
        this.name = data.name;
        this.stateId = data.stateId;
        this.divisionId = data.divisionId;
    }
}