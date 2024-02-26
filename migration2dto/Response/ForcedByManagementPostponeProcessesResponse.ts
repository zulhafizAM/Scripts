import { DateTime } from 'luxon';

export default class GetForcedByManagementPostponeProcessesResponse {
    public forcedByManagementPostponeProcesses: ForcedByManagementPostponeProcessesResponse =
        new ForcedByManagementPostponeProcessesResponse();
}
export class ForcedByManagementPostponeProcessesResponse {
    public forceId: bigint;
    public newTransferDate: DateTime;
    public postponeReason: string = '';
    public document: Blob;
    public approverId: bigint;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;

    public getFull(data) {
        this.forceId = data.forceId;
        this.newTransferDate = data.newTransferDate;
        this.postponeReason = data.postponeReason;
        this.document = data.document;
        this.approverId = data.approverId;
        this.approvedStatus = data.approvedStatus;
        this.approvedRemark = data.approvedRemark;
        this.approvedDate = data.approvedDate;
    }
}