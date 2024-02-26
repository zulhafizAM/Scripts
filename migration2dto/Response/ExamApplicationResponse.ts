import { DateTime } from 'luxon';

export default class GetExamApplicationResponse {
    public examApplication: ExamApplicationResponse =
        new ExamApplicationResponse();
}
export class ExamApplicationResponse {
    public employeeId: bigint;
    public examId: bigint;
    public applicationDate: DateTime;
    public document: Blob;
    public status: Blob;
    public remark: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.examId = data.examId;
        this.applicationDate = data.applicationDate;
        this.document = data.document;
        this.status = data.status;
        this.remark = data.remark;
    }
}