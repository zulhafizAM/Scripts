import { DateTime } from 'luxon';

export default class GetPensionDetailResponse {
    public pensionDetail: PensionDetailResponse = new PensionDetailResponse();
}
export class PensionDetailResponse {
    public employeeId: bigint;
    public applicationDate: DateTime;
    public PTBDate: DateTime;
    public referenceNumber: string = '';
    public referenceDate: DateTime;
    public status: string = '';
    public remark: string = '';
    public pensionNumber: string = '';
    public KWAPEmailDate: DateTime;

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.applicationDate = data.applicationDate;
        this.PTBDate = data.PTBDate;
        this.referenceNumber = data.referenceNumber;
        this.referenceDate = data.referenceDate;
        this.status = data.status;
        this.remark = data.remark;
        this.pensionNumber = data.pensionNumber;
        this.KWAPEmailDate = data.KWAPEmailDate;
    }
}
