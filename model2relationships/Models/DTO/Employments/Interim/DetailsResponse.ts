import { DateTime } from 'luxon';

export default class InterimApplicationResponse {
    public activityList: InterimApplicationDetailResponse[] = [];
    public isReadonly: boolean;
}
export class InterimApplicationDetailResponse {
    public grade: string;
    public position: string;
    public department: string;
    public referenceNumber: string;
    public startDate: DateTime;
    public endDate: DateTime;
    public placement: string;
    public reason: string;
}
