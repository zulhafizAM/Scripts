import { DateTime } from 'luxon';

export default class GetLeaveEntitlementResponse {
    public leaveEntitlement: LeaveEntitlementResponse =
        new LeaveEntitlementResponse();
}
export class LeaveEntitlementResponse {
    public employeeId: bigint;
    public year: number;
    public annual: number;
    public medical: number;
    public maternity: number;
    public paternity: number;
    public warded: number;
    public claimable: number;
    public remoteReligious: number;

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.year = data.year;
        this.annual = data.annual;
        this.medical = data.medical;
        this.maternity = data.maternity;
        this.paternity = data.paternity;
        this.warded = data.warded;
        this.claimable = data.claimable;
        this.remoteReligious = data.remoteReligious;
    }
}