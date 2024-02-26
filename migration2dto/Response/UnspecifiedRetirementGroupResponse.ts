import { DateTime } from 'luxon';

export default class GetUnspecifiedRetirementGroupResponse {
    public unspecifiedRetirementGroup: UnspecifiedRetirementGroupResponse =
        new UnspecifiedRetirementGroupResponse();
}
export class UnspecifiedRetirementGroupResponse {
    public name: string = '';
    public headCount: number;
    public date: DateTime;
    public status: string = '';

    public getFull(data) {
        this.name = data.name;
        this.headCount = data.headCount;
        this.date = data.date;
        this.status = data.status;
    }
}