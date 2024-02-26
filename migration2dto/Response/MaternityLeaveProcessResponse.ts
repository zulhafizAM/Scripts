import { DateTime } from 'luxon';

export default class GetMaternityLeaveProcessResponse {
    public maternityLeaveProcess: MaternityLeaveProcessResponse =
        new MaternityLeaveProcessResponse();
}
export class MaternityLeaveProcessResponse {
    public maternityLeaveId: bigint;
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
        this.maternityLeaveId = data.maternityLeaveId;
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