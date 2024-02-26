import { DateTime } from 'luxon';

export default class GetNewOfferResponse {
    public newOffer: NewOfferResponse =
        new NewOfferResponse();
}
export class NewOfferResponse {
    public employeeId: bigint;
    public meetingId: bigint;
    public meetingResult: string = '';
    public meetingRemark: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.meetingId = data.meetingId;
        this.meetingResult = data.meetingResult;
        this.meetingRemark = data.meetingRemark;
    }
}