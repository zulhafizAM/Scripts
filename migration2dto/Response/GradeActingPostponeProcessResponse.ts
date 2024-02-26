import { DateTime } from 'luxon';

export default class GetGradeActingPostponeProcessResponse {
    public gradeActingPostponeProcess: GradeActingPostponeProcessResponse =
        new GradeActingPostponeProcessResponse();
}
export class GradeActingPostponeProcessResponse {
    public actingId: bigint;
    public meetingId: bigint;
    public placementId: bigint;
    public newReportDutyDate: DateTime;
    public postponeReason: string = '';
    public document: Blob;
    public meetingResult: string = '';
    public meetingRemark: string = '';

    public getFull(data) {
        this.actingId = data.actingId;
        this.meetingId = data.meetingId;
        this.placementId = data.placementId;
        this.newReportDutyDate = data.newReportDutyDate;
        this.postponeReason = data.postponeReason;
        this.document = data.document;
        this.meetingResult = data.meetingResult;
        this.meetingRemark = data.meetingRemark;
    }
}