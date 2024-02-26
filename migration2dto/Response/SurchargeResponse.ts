import { DateTime } from 'luxon';

export default class GetSurchargeResponse {
    public surcharge: SurchargeResponse =
        new SurchargeResponse();
}
export class SurchargeResponse {
    public employeeId: bigint;
    public meetingId: bigint;
    public reportDate: DateTime;
    public surchargeAction: string = '';
    public surchargeRemark: string = '';
    public amount: number;
    public paymentType: string = '';
    public duration: number;
    public effectiveDate: DateTime;
    public meetingResult: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.meetingId = data.meetingId;
        this.reportDate = data.reportDate;
        this.surchargeAction = data.surchargeAction;
        this.surchargeRemark = data.surchargeRemark;
        this.amount = data.amount;
        this.paymentType = data.paymentType;
        this.duration = data.duration;
        this.effectiveDate = data.effectiveDate;
        this.meetingResult = data.meetingResult;
    }
}