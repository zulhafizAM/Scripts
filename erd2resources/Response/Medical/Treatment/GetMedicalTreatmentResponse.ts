export default class GetMedicalTreatmentResponse {
    public treatment: MedicalTreatmentResponse = new MedicalTreatmentResponse();
}
export class MedicalTreatmentResponse {
    public patientId: bigint;
    public description: string;
    public amount: number;
    public status: string;
    public remark: string;
}
