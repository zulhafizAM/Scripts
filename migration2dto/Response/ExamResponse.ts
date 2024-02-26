import { DateTime } from 'luxon';

export default class GetExamResponse {
    public exam: ExamResponse =
        new ExamResponse();
}
export class ExamResponse {
    public examTypeId: bigint;
    public title: string = '';
    public startDate: DateTime;
    public endDate: DateTime;
    public examDate: DateTime;
    public examLocation: string = '';

    public getFull(data) {
        this.examTypeId = data.examTypeId;
        this.title = data.title;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.examDate = data.examDate;
        this.examLocation = data.examLocation;
    }
}