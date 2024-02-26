import { DateTime } from 'luxon';

export default class GetAccruedAnnualLeaveResponse {
    public accruedAnnualLeave: AccruedAnnualLeaveResponse =
        new AccruedAnnualLeaveResponse();
}
export class AccruedAnnualLeaveResponse {
    public employeeId: bigint;
    public applicationDate: DateTime;
    public currentYear: number;
    public totalLeaveEntitlement: number;
    public leaveBalance: number;
    public acummulatedLeave: number;
    public maxReplacementLeave: number;
    public forwardedLeaveTotal: number;
    public status: string = '';
    public remark: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.applicationDate = data.applicationDate;
        this.currentYear = data.currentYear;
        this.totalLeaveEntitlement = data.totalLeaveEntitlement;
        this.leaveBalance = data.leaveBalance;
        this.acummulatedLeave = data.acummulatedLeave;
        this.maxReplacementLeave = data.maxReplacementLeave;
        this.forwardedLeaveTotal = data.forwardedLeaveTotal;
        this.status = data.status;
        this.remark = data.remark;
    }
}