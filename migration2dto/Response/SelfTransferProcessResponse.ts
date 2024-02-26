import { DateTime } from 'luxon';

export default class GetSelfTransferProcessResponse {
    public selfTransferProcess: SelfTransferProcessResponse =
        new SelfTransferProcessResponse();
}
export class SelfTransferProcessResponse {
    public selfTransferId: bigint;
    public directorSupporterId: bigint;
    public directorSupportedStatus: string;
    public directorSupportedRemark: string;
    public directorSupportedDate: DateTime;
    public appointedSupporterId: bigint;
    public appointedSupportedStatus: string;
    public appointedSupportedRemark: string;
    public appointedSupportedDate: DateTime;
    public appointedApproverId: bigint;
    public appointedApprovedStatus: string;
    public appointedApprovedRemark: string;
    public appointedApprovedDate: DateTime;

    public getFull(data) {
        this.selfTransferId = data.selfTransferId;
        this.directorSupporterId = data.directorSupporterId;
        this.directorSupportedStatus = data.directorSupportedStatus;
        this.directorSupportedRemark = data.directorSupportedRemark;
        this.directorSupportedDate = data.directorSupportedDate;
        this.appointedSupporterId = data.appointedSupporterId;
        this.appointedSupportedStatus = data.appointedSupportedStatus;
        this.appointedSupportedRemark = data.appointedSupportedRemark;
        this.appointedSupportedDate = data.appointedSupportedDate;
        this.appointedApproverId = data.appointedApproverId;
        this.appointedApprovedStatus = data.appointedApprovedStatus;
        this.appointedApprovedRemark = data.appointedApprovedRemark;
        this.appointedApprovedDate = data.appointedApprovedDate;
    }
}