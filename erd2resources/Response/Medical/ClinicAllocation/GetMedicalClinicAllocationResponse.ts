export default class GetMedicalClinicAllocationResponse {
    public clinicAllocation: MedicalClinicAllocationResponse = new MedicalClinicAllocationResponse();
}
export class MedicalClinicAllocationResponse {
    public current: number;
    public remainder: number;
    public newAllocation: number;
    public status: string;
    public remark: string;
}
