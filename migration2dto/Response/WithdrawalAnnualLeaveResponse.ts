import { DateTime } from 'luxon';

export default class GetWithdrawalAnnualLeaveResponse {
    public withdrawalAnnualLeave: WithdrawalAnnualLeaveResponse =
        new WithdrawalAnnualLeaveResponse();
}
export class WithdrawalAnnualLeaveResponse {
    public employeeId: bigint;
    public applicationDate: DateTime;
    public acummulatedLeave: number;
    public leaveWithdrawal: number;
    public leaveBalance: number;
    public startDate: DateTime;
    public status: string = '';
    public remark: string = '';
    public document: Blob;

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.applicationDate = data.applicationDate;
        this.acummulatedLeave = data.acummulatedLeave;
        this.leaveWithdrawal = data.leaveWithdrawal;
        this.leaveBalance = data.leaveBalance;
        this.startDate = data.startDate;
        this.status = data.status;
        this.remark = data.remark;
        this.document = data.document;
    }
}