import { DateTime } from 'luxon';

export default class GetMainGradeActingPromotionResponse {
    public mainGradeActingPromotion: MainGradeActingPromotionResponse =
        new MainGradeActingPromotionResponse();
}
export class MainGradeActingPromotionResponse {
    public employeeId: bigint;
    public meetingId: bigint;
    public isActing: boolean;
    public meetingResult: string = '';
    public meetingRemark: string = '';
    public status: string = '';
    public remark: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.meetingId = data.meetingId;
        this.isActing = data.isActing;
        this.meetingResult = data.meetingResult;
        this.meetingRemark = data.meetingRemark;
        this.status = data.status;
        this.remark = data.remark;
    }
}