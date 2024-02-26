import { DateTime } from 'luxon';

export default class GetForcedRetirementResponse {
    public forcedRetirement: ForcedRetirementResponse =
        new ForcedRetirementResponse();
}
export class ForcedRetirementResponse {
    public employeeId: bigint;
    public status: string = '';
    public remark: string = '';
    public applicationDate: DateTime;
    public sendDate: DateTime;
    public newRetirementDate: DateTime;
    public reason: string = '';
    public document: Blob;

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.status = data.status;
        this.remark = data.remark;
        this.applicationDate = data.applicationDate;
        this.sendDate = data.sendDate;
        this.newRetirementDate = data.newRetirementDate;
        this.reason = data.reason;
        this.document = data.document;
    }
}