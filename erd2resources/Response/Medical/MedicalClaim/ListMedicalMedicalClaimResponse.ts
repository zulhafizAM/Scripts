import { BaseResponse } from 'App/Models/DTO/BaseResponse';

export default class ListMedicalMedicalClaimResponse extends BaseResponse<MedicalMedicalClaimsResponse> {
    private medicalClaimList: MedicalMedicalClaimsResponse[] = [];

    public get medicalClaims(): MedicalMedicalClaimsResponse[] {
        return this.medicalClaimList;
    }

    public set medicalClaims(v: MedicalMedicalClaimsResponse[]) {
        this.medicalClaimList = v;
        this.currentPageSize = this.medicalClaimList.length;
    }
}

class MedicalMedicalClaimsResponse {
    public employeeId: bigint;
    public clinicId: bigint;
    public treatmentDate: datetimeoffset;
    public covered: number;
    public remainder: number;
    public paymentType: string;
    public status: string;
    public remark: string;
}
