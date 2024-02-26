import { DateTime } from 'luxon';

export default class NewHireActivityResponse {
    public activityList: NewHireActivityDetailResponse[] = [];
    public isReadonly: boolean;
}
export class NewHireActivityDetailResponse {
    public name: string;
    public joinDate: DateTime;
    public position: string;
    public description: string;
}
