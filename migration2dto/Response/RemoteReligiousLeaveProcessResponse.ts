import { DateTime } from 'luxon';

export default class GetRemoteReligiousLeaveProcessResponse {
    public remoteReligiousLeaveProcess: RemoteReligiousLeaveProcessResponse =
        new RemoteReligiousLeaveProcessResponse();
}
export class RemoteReligiousLeaveProcessResponse {
    public remoteReligiousId: bigint;
    public supporterId: bigint;
    public supportedStatus: string;
    public supportedRemark: string;
    public supportedDate: DateTime;
    public verifierId: bigint;
    public verifiedStatus: string;
    public verifiedRemark: string;
    public verifiedDate: DateTime;
    public approverId: bigint;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;
    public meetingResult: string = '';
    public meetingRemark: string = '';

    public getFull(data) {
        this.remoteReligiousId = data.remoteReligiousId;
        this.supporterId = data.supporterId;
        this.supportedStatus = data.supportedStatus;
        this.supportedRemark = data.supportedRemark;
        this.supportedDate = data.supportedDate;
        this.verifierId = data.verifierId;
        this.verifiedStatus = data.verifiedStatus;
        this.verifiedRemark = data.verifiedRemark;
        this.verifiedDate = data.verifiedDate;
        this.approverId = data.approverId;
        this.approvedStatus = data.approvedStatus;
        this.approvedRemark = data.approvedRemark;
        this.approvedDate = data.approvedDate;
        this.meetingResult = data.meetingResult;
        this.meetingRemark = data.meetingRemark;
    }
}