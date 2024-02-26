import { DateTime } from 'luxon';

export default class GetHouseMovingProcessResponse {
    public houseMovingProcess: HouseMovingProcessResponse =
        new HouseMovingProcessResponse();
}
export class HouseMovingProcessResponse {
    public houseMovingId: bigint;
    public confirmerId: bigint;
    public confirmedStatus: string;
    public confirmedRemark: string;
    public confirmedDate: DateTime;
    public verifierId: bigint;
    public verifiedStatus: string;
    public verifiedRemark: string;
    public verifiedDate: DateTime;
    public supporterId: bigint;
    public supportedStatus: string;
    public supportedRemark: string;
    public supportedDate: DateTime;
    public approverId: bigint;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;

    public getFull(data) {
        this.houseMovingId = data.houseMovingId;
        this.confirmerId = data.confirmerId;
        this.confirmedStatus = data.confirmedStatus;
        this.confirmedRemark = data.confirmedRemark;
        this.confirmedDate = data.confirmedDate;
        this.verifierId = data.verifierId;
        this.verifiedStatus = data.verifiedStatus;
        this.verifiedRemark = data.verifiedRemark;
        this.verifiedDate = data.verifiedDate;
        this.supporterId = data.supporterId;
        this.supportedStatus = data.supportedStatus;
        this.supportedRemark = data.supportedRemark;
        this.supportedDate = data.supportedDate;
        this.approverId = data.approverId;
        this.approvedStatus = data.approvedStatus;
        this.approvedRemark = data.approvedRemark;
        this.approvedDate = data.approvedDate;
    }
}