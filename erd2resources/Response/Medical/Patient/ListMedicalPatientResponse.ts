import { BaseResponse } from 'App/Models/DTO/BaseResponse';

export default class ListMedicalPatientResponse extends BaseResponse<MedicalPatientsResponse> {
    private patientList: MedicalPatientsResponse[] = [];

    public get patients(): MedicalPatientsResponse[] {
        return this.patientList;
    }

    public set patients(v: MedicalPatientsResponse[]) {
        this.patientList = v;
        this.currentPageSize = this.patientList.length;
    }
}

class MedicalPatientsResponse {
    public claimId: bigint;
    public relationshipId: bigint;
    public placementId: bigint;
    public name: string;
    public identityDocumentCard: string;
    public status: string;
    public remark: string;
}
