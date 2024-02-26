import { DateTime } from 'luxon';

export default class GetReplacementAnnualLeavesProcessResponse {
    public replacementAnnualLeavesProcess: ReplacementAnnualLeavesProcessResponse =
        new ReplacementAnnualLeavesProcessResponse();
}
export class ReplacementAnnualLeavesProcessResponse {
    public replacementId: bigint;
    public directorSupporterId: bigint;
    public directorSupportedStatus: string;
    public directorSupportedRemark: string;
    public directorSupportedDate: DateTime;
    public certifierId: bigint;
    public certifiedStatus: string;
    public certifiedRemark: string;
    public certifiedDate: DateTime;
    public appointedSupporterId: bigint;
    public appointedSupportedStatus: string;
    public appointedSupportedRemark: string;
    public appointedSupportedDate: DateTime;
    public approverId: bigint;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;

    public getFull(data) {
        this.replacementId = data.replacementId;
        this.directorSupporterId = data.directorSupporterId;
        this.directorSupportedStatus = data.directorSupportedStatus;
        this.directorSupportedRemark = data.directorSupportedRemark;
        this.directorSupportedDate = data.directorSupportedDate;
        this.certifierId = data.certifierId;
        this.certifiedStatus = data.certifiedStatus;
        this.certifiedRemark = data.certifiedRemark;
        this.certifiedDate = data.certifiedDate;
        this.appointedSupporterId = data.appointedSupporterId;
        this.appointedSupportedStatus = data.appointedSupportedStatus;
        this.appointedSupportedRemark = data.appointedSupportedRemark;
        this.appointedSupportedDate = data.appointedSupportedDate;
        this.approverId = data.approverId;
        this.approvedStatus = data.approvedStatus;
        this.approvedRemark = data.approvedRemark;
        this.approvedDate = data.approvedDate;
    }
}