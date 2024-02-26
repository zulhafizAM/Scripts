export default class GetMedicalEmployeeAllocationResponse {
    public employeeAllocation: MedicalEmployeeAllocationResponse = new MedicalEmployeeAllocationResponse();
}
export class MedicalEmployeeAllocationResponse {
    public employeeId: bigint;
    public covered: number;
    public remainder: number;
    public status: string;
    public remark: string;
}
