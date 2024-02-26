import { DateTime } from 'luxon';

export default class GetSelfTransferPostponeProcessResponse {
    public selfTransferPostponeProcess: SelfTransferPostponeProcessResponse =
        new SelfTransferPostponeProcessResponse();
}
export class SelfTransferPostponeProcessResponse {
    public selfTransferId: bigint;
    public employeeId: bigint;
    public transferDate: DateTime;
    public newTransferDate: DateTime;
    public postponeReason: string = '';
    public document: Blob;
    public approverId: bigint;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;

    public getFull(data) {
        this.selfTransferId = data.selfTransferId;
        this.employeeId = data.employeeId;
        this.transferDate = data.transferDate;
        this.newTransferDate = data.newTransferDate;
        this.postponeReason = data.postponeReason;
        this.document = data.document;
        this.approverId = data.approverId;
        this.approvedStatus = data.approvedStatus;
        this.approvedRemark = data.approvedRemark;
        this.approvedDate = data.approvedDate;
    }
}