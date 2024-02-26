import { DateTime } from 'luxon';

export default class GetReplacementAnnualLeaveResponse {
    public replacementAnnualLeave: ReplacementAnnualLeaveResponse =
        new ReplacementAnnualLeaveResponse();
}
export class ReplacementAnnualLeaveResponse {
    public employeeId: bigint;
    public accumulatedLeave: number;
    public isDeducted: boolean;
    public amount: number;
    public endDate: DateTime;
    public status: string = '';
    public remark: string = '';
    public document: Blob;

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.accumulatedLeave = data.accumulatedLeave;
        this.isDeducted = data.isDeducted;
        this.amount = data.amount;
        this.endDate = data.endDate;
        this.status = data.status;
        this.remark = data.remark;
        this.document = data.document;
    }
}