import { DateTime } from 'luxon';

export default class GetWithoutPayLeaveProcessResponse {
    public withoutPayLeaveProcess: WithoutPayLeaveProcessResponse =
        new WithoutPayLeaveProcessResponse();
}
export class WithoutPayLeaveProcessResponse {
    public withoutPayLeaveId: bigint;
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
    public appointedSupporterId: bigint;
    public appointedSupportedStatus: string;
    public appointedSupportedRemark: string;
    public appointedSupportedDate: DateTime;
    public approverId: bigint;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;
    public meetingResult: string = '';
    public meetingRemark: string = '';

    public getFull(data) {
        this.withoutPayLeaveId = data.withoutPayLeaveId;
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
        this.appointedSupporterId = data.appointedSupporterId;
        this.appointedSupportedStatus = data.appointedSupportedStatus;
        this.appointedSupportedRemark = data.appointedSupportedRemark;
        this.appointedSupportedDate = data.appointedSupportedDate;
        this.approverId = data.approverId;
        this.approvedStatus = data.approvedStatus;
        this.approvedRemark = data.approvedRemark;
        this.approvedDate = data.approvedDate;
        this.meetingResult = data.meetingResult;
        this.meetingRemark = data.meetingRemark;
    }
}