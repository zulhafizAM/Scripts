import { DateTime } from 'luxon';

export default class GetMedicalClaimResponse {
    public medicalClaim: MedicalClaimResponse =
        new MedicalClaimResponse();
}
export class MedicalClaimResponse {
    public employeeMedicalAllocId: bigint;
    public clinicId: bigint;
    public leaveDay: number;
    public treatmentDate: DateTime;
    public invoiceDate: DateTime;
    public invoiceNumber: string = '';
    public month: number;
    public year: number;
    public amount: number;
    public status: string = '';
    public remark: string = '';
    public document: Blob;

    public getFull(data) {
        this.employeeMedicalAllocId = data.employeeMedicalAllocId;
        this.clinicId = data.clinicId;
        this.leaveDay = data.leaveDay;
        this.treatmentDate = data.treatmentDate;
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