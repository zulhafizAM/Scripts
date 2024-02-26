import { DateTime } from 'luxon';

export default class GetUnspecifiedRetirementResponse {
    public unspecifiedRetirement: UnspecifiedRetirementResponse =
        new UnspecifiedRetirementResponse();
}
export class UnspecifiedRetirementResponse {
    public employeeId: bigint;
    public confirmerId: bigint;
    public retirementTypeId: bigint;
    public groupId: bigint;
    public document: Blob;
    public remark: string = '';
    public confirmedDate: DateTime;
    public status: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.confirmerId = data.confirmerId;
        this.retirementTypeId = data.retirementTypeId;
        this.groupId = data.groupId;
        this.document = data.document;
        this.remark = data.remark;
        this.confirmedDate = data.confirmedDate;
        this.status = data.status;
    }
}