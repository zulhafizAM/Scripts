import { DateTime } from 'luxon';

export default class GetContractLifeCycleProcessResponse {
    public contractLifeCycleProcess: ContractLifeCycleProcessResponse =
        new ContractLifeCycleProcessResponse();
}
export class ContractLifeCycleProcessResponse {
    public lifecycleId: bigint;
    public certifierId: bigint;
    public certifiedStatus: string;
    public certifiedRemark: string;
    public certifiedDate: DateTime;
    public supporterId: bigint;
    public supportedStatus: string;
    public supportedRemark: string;
    public supportedDate: DateTime;
    public approverId: bigint;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;
    public confirmerId: bigint;
    public confirmedStatus: string;
    public confirmedRemark: string;
    public confirmedDate: DateTime;

    public getFull(data) {
        this.lifecycleId = data.lifecycleId;
        this.certifierId = data.certifierId;
        this.certifiedStatus = data.certifiedStatus;
        this.certifiedRemark = data.certifiedRemark;
        this.certifiedDate = data.certifiedDate;
        this.supporterId = data.supporterId;
        this.supportedStatus = data.supportedStatus;
        this.supportedRemark = data.supportedRemark;
        this.supportedDate = data.supportedDate;
        this.approverId = data.approverId;
        this.approvedStatus = data.approvedStatus;
        this.approvedRemark = data.approvedRemark;
        this.approvedDate = data.approvedDate;
        this.confirmerId = data.confirmerId;
        this.confirmedStatus = data.confirmedStatus;
        this.confirmedRemark = data.confirmedRemark;
        this.confirmedDate = data.confirmedDate;
    }
}