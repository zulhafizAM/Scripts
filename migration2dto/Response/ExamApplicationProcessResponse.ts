import { DateTime } from 'luxon';

export default class GetExamApplicationProcessResponse {
    public examApplicationProcess: ExamApplicationProcessResponse =
        new ExamApplicationProcessResponse();
}
export class ExamApplicationProcessResponse {
    public applicantId: bigint;
    public verifierId: bigint;
    public verifiedStatus: string;
    public verifiedRemark: string;
    public verifiedDate: DateTime;
    public comfirmerId: bigint;
    public comfirmedStatus: string;
    public comfirmedRemark: string;
    public comfirmedDate: DateTime;

    public getFull(data) {
        this.applicantId = data.applicantId;
        this.verifierId = data.verifierId;
        this.verifiedStatus = data.verifiedStatus;
        this.verifiedRemark = data.verifiedRemark;
        this.verifiedDate = data.verifiedDate;
        this.comfirmerId = data.comfirmerId;
        this.comfirmedStatus = data.comfirmedStatus;
        this.comfirmedRemark = data.comfirmedRemark;
        this.comfirmedDate = data.comfirmedDate;
    }
}