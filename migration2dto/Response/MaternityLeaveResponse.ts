import { DateTime } from 'luxon';

export default class GetMaternityLeaveResponse {
    public maternityLeave: MaternityLeaveResponse =
        new MaternityLeaveResponse();
}
export class MaternityLeaveResponse {
    public employeeId: bigint;
    public reason: string = '';
    public applicationDate: DateTime;
    public startDate: DateTime;
    public endDate: DateTime;
    public expectedDeliveryDate: DateTime;
    public status: string = '';
    public remark: string = '';
    public currentAddress: string = '';
    public document: Blob;

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.reason = data.reason;
        this.applicationDate = data.applicationDate;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.expectedDeliveryDate = data.expectedDeliveryDate;
        this.status = data.status;
        this.remark = data.remark;
        this.currentAddress = data.currentAddress;
        this.document = data.document;
    }
}