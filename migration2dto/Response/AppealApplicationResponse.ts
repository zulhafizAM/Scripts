import { DateTime } from 'luxon';

export default class GetAppealApplicationResponse {
    public appealApplication: AppealApplicationResponse =
        new AppealApplicationResponse();
}
export class AppealApplicationResponse {
    public employeeId: bigint;
    public meetingId: bigint;
    public applicationDate: DateTime;
    public reason: string = '';
    public status: string = '';
    public meetingResult: string = '';
    public penaltyName: string = '';
    public penaltyDescription: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.meetingId = data.meetingId;
        this.applicationDate = data.applicationDate;
        this.reason = data.reason;
        this.status = data.status;
        this.meetingResult = data.meetingResult;
        this.penaltyName = data.penaltyName;
        this.penaltyDescription = data.penaltyDescription;
    }
}