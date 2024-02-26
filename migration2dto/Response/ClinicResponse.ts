import { DateTime } from 'luxon';

export default class GetClinicResponse {
    public clinic: ClinicResponse =
        new ClinicResponse();
}
export class ClinicResponse {
    public districtId: bigint;
    public code: string = '';
    public year: number;
    public allocatedAmount: number;
    public totalClaimed: number;
    public applicationDate: DateTime;
    public panelAppointedDate: DateTime;
    public panelContractEndDate: DateTime;
    public name: string = '';
    public address: string = '';
    public foundationDate: DateTime;
    public clinicType: string = '';
    public ownershipStatus: string = '';
    public registeredMedicalPractitioner: string = '';
    public branchCount: number;
    public clinicOfficeDistance: number;
    public nearestClinicDistance: number;
    public operationHours: string = '';
    public contactNumber: string = '';
    public registerMedical: string = '';
    public status: string = '';
    public remark: string = '';
    public document: Blob;

    public getFull(data) {
        this.districtId = data.districtId;
        this.code = data.code;
        this.year = data.year;
        this.allocatedAmount = data.allocatedAmount;
        this.totalClaimed = data.totalClaimed;
        this.applicationDate = data.applicationDate;
        this.panelAppointedDate = data.panelAppointedDate;
        this.panelContractEndDate = data.panelContractEndDate;
        this.name = data.name;
        this.address = data.address;
        this.foundationDate = data.foundationDate;
        this.clinicType = data.clinicType;
        this.ownershipStatus = data.ownershipStatus;
        this.registeredMedicalPractitioner = data.registeredMedicalPractitioner;
        this.branchCount = data.branchCount;
        this.clinicOfficeDistance = data.clinicOfficeDistance;
        this.nearestClinicDistance = data.nearestClinicDistance;
        this.operationHours = data.operationHours;
        this.contactNumber = data.contactNumber;
        this.registerMedical = data.registerMedical;
        this.status = data.status;
        this.remark = data.remark;
        this.document = data.document;
    }
}