import { DateTime } from 'luxon';

export default class GetClinicClaimResponse {
    public clinicClaim: ClinicClaimResponse =
        new ClinicClaimResponse();
}
export class ClinicClaimResponse {
    public clinicId: bigint;
    public invoiceDate: DateTime;
    public invoiceNumber: string = '';
    public month: number;
    public year: number;
    public amount: number;
    public status: string = '';
    public remark: string = '';
    public document: Blob;

    public getFull(data) {
        this.clinicId = data.clinicId;
        this.invoiceDate = data.invoiceDate;
        this.invoiceNumber = data.invoiceNumber;
        this.month = data.month;
        this.year = data.year;
        this.amount = data.amount;
        this.status = data.status;
        this.remark = data.remark;
        this.document = data.document;
    }
}