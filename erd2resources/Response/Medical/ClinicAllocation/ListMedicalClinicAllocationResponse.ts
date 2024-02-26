import { BaseResponse } from 'App/Models/DTO/BaseResponse';

export default class ListMedicalClinicAllocationResponse extends BaseResponse<MedicalClinicAllocationsResponse> {
    private clinicAllocationList: MedicalClinicAllocationsResponse[] = [];

    public get clinicAllocations(): MedicalClinicAllocationsResponse[] {
        return this.clinicAllocationList;
    }

    public set clinicAllocations(v: MedicalClinicAllocationsResponse[]) {
        this.clinicAllocationList = v;
        this.currentPageSize = this.clinicAllocationList.length;
    }
}

class MedicalClinicAllocationsResponse {
    public current: number;
    public remainder: number;
    public newAllocation: number;
    public status: string;
    public remark: string;
}
