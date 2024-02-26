import { DateTime } from 'luxon';

export default class GetWithoutPayLeaveResponse {
    public withoutPayLeave: WithoutPayLeaveResponse =
        new WithoutPayLeaveResponse();
}
export class WithoutPayLeaveResponse {
    public employeeId: bigint;
    public meetingId: bigint;
    public reason: string = '';
    public applicationDate: DateTime;
    public startDate: DateTime;
    public endDate: DateTime;
    public status: string = '';
    public remark: string = '';
    public document: Blob;

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.meetingId = data.meetingId;
        this.reason = data.reason;
        this.applicationDate = data.applicationDate;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.status = data.status;
        this.remark = data.remark;
        this.document = data.document;
    }
}