export default class GetMedicalPatientResponse {
    public patient: MedicalPatientResponse = new MedicalPatientResponse();
}
export class MedicalPatientResponse {
    public claimId: bigint;
    public relationshipId: bigint;
    public placementId: bigint;
    public name: string;
    public identityDocumentCard: string;
    public status: string;
    public remark: string;
}
