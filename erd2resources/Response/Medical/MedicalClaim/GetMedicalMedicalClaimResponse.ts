export default class GetMedicalMedicalClaimResponse {
    public medicalClaim: MedicalMedicalClaimResponse = new MedicalMedicalClaimResponse();
}
export class MedicalMedicalClaimResponse {
    public employeeId: bigint;
    public clinicId: bigint;
    public treatmentDate: datetimeoffset;
    public covered: number;
    public remainder: number;
    public paymentType: string;
    public status: string;
    public remark: string;
}
