import { DateTime } from 'luxon';

export default class GetVoluntaryRetirementResponse {
    public voluntaryRetirement: VoluntaryRetirementResponse =
        new VoluntaryRetirementResponse();
}
export class VoluntaryRetirementResponse {
    public employeeId: bigint;
    public applicationDate: DateTime;
    public sendDate: DateTime;
    public newRetirementDate: DateTime;
    public status: string = '';
    public remark: string = '';
    public reason: string = '';
    public document: Blob;

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.applicationDate = data.applicationDate;
        this.sendDate = data.sendDate;
        this.newRetirementDate = data.newRetirementDate;
        this.status = data.status;
        this.remark = data.remark;
        this.reason = data.reason;
        this.document = data.document;
    }
}