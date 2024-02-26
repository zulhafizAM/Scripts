import { DateTime } from 'luxon';

export default class GetGradeActingTypeResponse {
    public gradeActingType: GradeActingTypeResponse =
        new GradeActingTypeResponse();
}
export class GradeActingTypeResponse {
    public employeeId: bigint;
    public meetingId: bigint;
    public interviewResult: string = '';
    public isUpForPromotion: boolean;
    public isGrade1till54: boolean;
    public isPostpone: boolean;
    public meetingResult: string = '';
    public meetingRemark: string = '';
    public status: string = '';
    public remark: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.meetingId = data.meetingId;
        this.interviewResult = data.interviewResult;
        this.isUpForPromotion = data.isUpForPromotion;
        this.isGrade1till54 = data.isGrade1till54;
        this.isPostpone = data.isPostpone;
        this.meetingResult = data.meetingResult;
        this.meetingRemark = data.meetingRemark;
        this.status = data.status;
        this.remark = data.remark;
    }
}