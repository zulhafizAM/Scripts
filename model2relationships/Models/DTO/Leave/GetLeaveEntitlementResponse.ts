import { DateTime } from 'luxon';

export default class GetLeaveEntitlementDetailResponse {
    public leaveReport: LeaveEntitlementEmployeeResponse =
        new LeaveEntitlementEmployeeResponse();
}

export class UntrackedLeave {
    public startDate: DateTime;
    public endDate: DateTime;
    public durationDays: number;
}

export class LeaveEntitlementEmployeeResponse {
    public year: number;
    public annual: number;
    public medical: number;
    public maternity: number;
    public paternity: number;
    public warded: number;
    public remoteReligious: number;
    public claimable: number;
    public untrackedLeave: UntrackedLeave[];

    public getFull(data) {
        this.year = data.year;
        this.annual = data.annual;
        this.medical = data.medical;
        this.maternity = data.maternity;
        this.paternity = data.paternity;
        this.warded = data.warded;
        this.remoteReligious = data.remoteReligious;
        this.claimable = data.claimable;
        // this.startDate =
        //     data.employee.AlternateUntrackedLeavesAsemployee.startDate;
        // this.endDate =
        //     data.employee.AlternateUntrackedLeavesAsemployee.startDate;
        // this.durationDays = data.endDate.diff(this.startDate, 'days').days;
    }
}
