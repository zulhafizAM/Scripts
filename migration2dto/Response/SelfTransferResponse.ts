import { DateTime } from 'luxon';

export default class GetSelfTransferResponse {
    public selfTransfer: SelfTransferResponse =
        new SelfTransferResponse();
}
export class SelfTransferResponse {
    public employeeId: bigint;
    public meetingId: bigint;
    public firstChoicePlacementId: bigint;
    public secondChoicePlacementId: bigint;
    public applicationDate: DateTime;
    public isPostpone: boolean;
    public reason: string = '';
    public reasonRemark: string = '';
    public distanceFromWork: number;
    public employerName: string = '';
    public startServiceDate: DateTime;
    public meetingResult: string = '';
    public meetingRemark: string = '';
    public status: string = '';
    public remark: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.meetingId = data.meetingId;
        this.firstChoicePlacementId = data.firstChoicePlacementId;
        this.secondChoicePlacementId = data.secondChoicePlacementId;
        this.applicationDate = data.applicationDate;
        this.isPostpone = data.isPostpone;
        this.reason = data.reason;
        this.reasonRemark = data.reasonRemark;
        this.distanceFromWork = data.distanceFromWork;
        this.employerName = data.employerName;
        this.startServiceDate = data.startServiceDate;
        this.meetingResult = data.meetingResult;
        this.meetingRemark = data.meetingRemark;
        this.status = data.status;
        this.remark = data.remark;
    }
}