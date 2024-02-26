import { DateTime } from 'luxon';

export default class GetMainGradeActingPromotionProcessResponse {
    public mainGradeActingPromotionProcess: MainGradeActingPromotionProcessResponse =
        new MainGradeActingPromotionProcessResponse();
}
export class MainGradeActingPromotionProcessResponse {
    public actingId: bigint;
    public certifierId: bigint;
    public certifiedStatus: string;
    public certifiedRemark: string;
    public certifiedDate: DateTime;
    public supporterId: bigint;
    public supportedStatus: string;
    public supportedRemark: string;
    public supportedDate: DateTime;
    public approverId: bigint;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;

    public getFull(data) {
        this.actingId = data.actingId;
        this.certifierId = data.certifierId;
        this.certifiedStatus = data.certifiedStatus;
        this.certifiedRemark = data.certifiedRemark;
        this.certifiedDate = data.certifiedDate;
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