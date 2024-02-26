import { DateTime } from 'luxon';

export default class GetGradePromotionTypeResponse {
    public gradePromotionType: GradePromotionTypeResponse =
        new GradePromotionTypeResponse();
}
export class GradePromotionTypeResponse {
    public employeeId: bigint;
    public meetingId: bigint;
    public meetingResult: string = '';
    public meetingRemark: string = '';
    public isGrade1till54: boolean;
    public status: string = '';
    public remark: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.meetingId = data.meetingId;
        this.meetingResult = data.meetingResult;
        this.meetingRemark = data.meetingRemark;
        this.isGrade1till54 = data.isGrade1till54;
        this.status = data.status;
        this.remark = data.remark;
    }
}