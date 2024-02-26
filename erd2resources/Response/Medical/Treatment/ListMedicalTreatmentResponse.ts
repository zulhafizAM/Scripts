import { BaseResponse } from 'App/Models/DTO/BaseResponse';

export default class ListMedicalTreatmentResponse extends BaseResponse<MedicalTreatmentsResponse> {
    private treatmentList: MedicalTreatmentsResponse[] = [];

    public get treatments(): MedicalTreatmentsResponse[] {
        return this.treatmentList;
    }

    public set treatments(v: MedicalTreatmentsResponse[]) {
        this.treatmentList = v;
        this.currentPageSize = this.treatmentList.length;
    }
}

class MedicalTreatmentsResponse {
    public patientId: bigint;
    public description: string;
    public amount: number;
    public status: string;
    public remark: string;
}
