import { DateTime } from 'luxon';

export default class GetActivityResponse {
    public activity: ActivityResponse =
        new ActivityResponse();
}
export class ActivityResponse {
    public name: string = '';
    public personalDetailId: bigint;
    public joiningDate: DateTime;
    public description: string = '';

    public getFull(data) {
        this.name = data.name;
        this.personalDetailId = data.personalDetailId;
        this.joiningDate = data.joiningDate;
        this.description = data.description;
    }
}