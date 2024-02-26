import { DateTime } from 'luxon';

export class SelfTransferPostponeProcessResponse {
    public transferDate: DateTime;
    public newTransferDate: DateTime;
    public postponeReason: string;
    public approver: string;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;
}
