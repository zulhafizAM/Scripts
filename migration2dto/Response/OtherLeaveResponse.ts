import { DateTime } from 'luxon';

export default class GetOtherLeaveResponse {
    public otherLeave: OtherLeaveResponse =
        new OtherLeaveResponse();
}
export class OtherLeaveResponse {
    public employeeId: bigint;
    public applicationDate: DateTime;
    public startDate: DateTime;
    public endDate: DateTime;
    public status: string = '';
    public remark: string = '';
    public document: Blob;

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.applicationDate = data.applicationDate;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.status = data.status;
        this.remark = data.remark;
        this.document = data.document;
    }
}