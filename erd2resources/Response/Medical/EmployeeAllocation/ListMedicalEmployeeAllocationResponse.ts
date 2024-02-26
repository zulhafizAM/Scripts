import { BaseResponse } from 'App/Models/DTO/BaseResponse';

export default class ListMedicalEmployeeAllocationResponse extends BaseResponse<MedicalEmployeeAllocationsResponse> {
    private employeeAllocationList: MedicalEmployeeAllocationsResponse[] = [];

    public get employeeAllocations(): MedicalEmployeeAllocationsResponse[] {
        return this.employeeAllocationList;
    }

    public set employeeAllocations(v: MedicalEmployeeAllocationsResponse[]) {
        this.employeeAllocationList = v;
        this.currentPageSize = this.employeeAllocationList.length;
    }
}

class MedicalEmployeeAllocationsResponse {
    public employeeId: bigint;
    public covered: number;
    public remainder: number;
    public status: string;
    public remark: string;
}
