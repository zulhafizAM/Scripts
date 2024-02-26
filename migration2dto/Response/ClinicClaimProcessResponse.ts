import { DateTime } from 'luxon';

export default class GetClinicClaimProcessResponse {
    public clinicClaimProcess: ClinicClaimProcessResponse =
        new ClinicClaimProcessResponse();
}
export class ClinicClaimProcessResponse {
    public claimId: bigint;
    public secretaryApproverId: bigint;
    public secretaryApprovedStatus: string;
    public secretaryApprovedRemark: string;
    public secretaryApprovedDate: DateTime;
    public supporterId: bigint;
    public supportedStatus: string;
    public supportedRemark: string;
    public supportedDate: DateTime;
    public appointedApproverId: bigint;
    public appointedApprovedStatus: string;
    public appointedApprovedRemark: string;
    public appointedApprovedDate: DateTime;

    public getFull(data) {
        this.claimId = data.claimId;
        this.secretaryApproverId = data.secretaryApproverId;
        this.secretaryApprovedStatus = data.secretaryApprovedStatus;
        this.secretaryApprovedRemark = data.secretaryApprovedRemark;
        this.secretaryApprovedDate = data.secretaryApprovedDate;
        this.supporterId = data.supporterId;
        this.supportedStatus = data.supportedStatus;
        this.supportedRemark = data.supportedRemark;
        this.supportedDate = data.supportedDate;
        this.appointedApproverId = data.appointedApproverId;
        this.appointedApprovedStatus = data.appointedApprovedStatus;
        this.appointedApprovedRemark = data.appointedApprovedRemark;
        this.appointedApprovedDate = data.appointedApprovedDate;
    }
}