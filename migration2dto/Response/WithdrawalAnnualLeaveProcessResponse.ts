import { DateTime } from 'luxon';

export default class GetWithdrawalAnnualLeaveProcessResponse {
    public withdrawalAnnualLeaveProcess: WithdrawalAnnualLeaveProcessResponse =
        new WithdrawalAnnualLeaveProcessResponse();
}
export class WithdrawalAnnualLeaveProcessResponse {
    public withdrawalLeaveId: bigint;
    public supporterId: bigint;
    public supportedStatus: string;
    public supportedRemark: string;
    public supportedDate: DateTime;
    public verifierId: bigint;
    public verifiedStatus: string;
    public verifiedRemark: string;
    public verifiedDate: DateTime;
    public confirmerId: bigint;
    public confirmedStatus: string;
    public confirmedRemark: string;
    public confirmedDate: DateTime;
    public certifierId: bigint;
    public certifiedStatus: string;
    public certifiedRemark: string;
    public certifiedDate: DateTime;
    public approverId: bigint;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;

    public getFull(data) {
        this.withdrawalLeaveId = data.withdrawalLeaveId;
        this.supporterId = data.supporterId;
        this.supportedStatus = data.supportedStatus;
        this.supportedRemark = data.supportedRemark;
        this.supportedDate = data.supportedDate;
        this.verifierId = data.verifierId;
        this.verifiedStatus = data.verifiedStatus;
        this.verifiedRemark = data.verifiedRemark;
        this.verifiedDate = data.verifiedDate;
        this.confirmerId = data.confirmerId;
        this.confirmedStatus = data.confirmedStatus;
        this.confirmedRemark = data.confirmedRemark;
        this.confirmedDate = data.confirmedDate;
        this.certifierId = data.certifierId;
        this.certifiedStatus = data.certifiedStatus;
        this.certifiedRemark = data.certifiedRemark;
        this.certifiedDate = data.certifiedDate;
        this.approverId = data.approverId;
        this.approvedStatus = data.approvedStatus;
        this.approvedRemark = data.approvedRemark;
        this.approvedDate = data.approvedDate;
    }
}