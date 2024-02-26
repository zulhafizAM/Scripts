import { DateTime } from 'luxon';

export default class GetHalfPayLeaveProcessResponse {
    public halfPayLeaveProcess: HalfPayLeaveProcessResponse =
        new HalfPayLeaveProcessResponse();
}
export class HalfPayLeaveProcessResponse {
    public halfPayLeaveId: bigint;
    public directorSupporterId: bigint;
    public directorSupportedStatus: string;
    public directorSupportedRemark: string;
    public directorSupportedDate: DateTime;
    public verifierId: bigint;
    public verifiedStatus: string;
    public verifiedRemark: string;
    public verifiedDate: DateTime;
    public confirmerId: bigint;
    public confirmedStatus: string;
    public confirmedRemark: string;
    public confirmedDate: DateTime;
    public approverId: bigint;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;
    public meetingResult: string = '';
    public meetingRemark: string = '';

    public getFull(data) {
        this.halfPayLeaveId = data.halfPayLeaveId;
        this.directorSupporterId = data.directorSupporterId;
        this.directorSupportedStatus = data.directorSupportedStatus;
        this.directorSupportedRemark = data.directorSupportedRemark;
        this.directorSupportedDate = data.directorSupportedDate;
        this.verifierId = data.verifierId;
        this.verifiedStatus = data.verifiedStatus;
        this.verifiedRemark = data.verifiedRemark;
        this.verifiedDate = data.verifiedDate;
        this.confirmerId = data.confirmerId;
        this.confirmedStatus = data.confirmedStatus;
        this.confirmedRemark = data.confirmedRemark;
        this.confirmedDate = data.confirmedDate;
        this.approverId = data.approverId;
        this.approvedStatus = data.approvedStatus;
        this.approvedRemark = data.approvedRemark;
        this.approvedDate = data.approvedDate;
        this.meetingResult = data.meetingResult;
        this.meetingRemark = data.meetingRemark;
    }
}