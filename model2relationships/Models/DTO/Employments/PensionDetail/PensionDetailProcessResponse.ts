import { DateTime } from 'luxon';

export default class GetPensionDetailProcessResponse {
    public process: PensionDetailProcessResponse =
        new PensionDetailProcessResponse();
}
export class PensionDetailProcessResponse {
    public supporterName: string = '';
    public supportedStatus: string = '';
    public supportedRemark: string = '';
    public supportedDate: DateTime;
    public approverName: string = '';
    public approvedStatus: string = '';
    public approvedRemark: string = '';
    public approvedDate: DateTime;

    public getFull(data) {
        this.supporterName = data.supporter.personalDetail.name;
        this.supportedStatus = data.supportedStatus;
        this.supportedRemark = data.supportedRemark;
        this.supportedDate = data.supportedDate;
        this.approverName = data.approver.personalDetail.name;
        this.approvedStatus = data.approvedStatus;
        this.approvedRemark = data.approvedRemark;
        this.approvedDate = data.approvedDate;
    }
}
