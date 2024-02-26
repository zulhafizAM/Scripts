import { DateTime } from 'luxon';

export default class GetForcedTransferByDirectorResponse {
    public forcedTransferByDirector: ForcedTransferByDirectorResponse =
        new ForcedTransferByDirectorResponse();
}
export class ForcedTransferByDirectorResponse {
    public employeeId: bigint;
    public meetingId: bigint;
    public newPlacementId: bigint;
    public isPostpone: boolean;
    public reason: string = '';
    public transferDate: DateTime;
    public startDate: DateTime;
    public meetingResult: string = '';
    public meetingRemark: string = '';
    public status: string = '';
    public remark: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.meetingId = data.meetingId;
        this.newPlacementId = data.newPlacementId;
        this.isPostpone = data.isPostpone;
        this.reason = data.reason;
        this.transferDate = data.transferDate;
        this.startDate = data.startDate;
        this.meetingResult = data.meetingResult;
        this.meetingRemark = data.meetingRemark;
        this.status = data.status;
        this.remark = data.remark;
    }
}