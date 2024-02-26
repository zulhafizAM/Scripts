import { DateTime } from 'luxon';

export default class GetAccussationResponse {
    public accussation: AccussationResponse =
        new AccussationResponse();
}
export class AccussationResponse {
    public integrityId: bigint;
    public accussationList: string = '';
    public receivedChargeLetterDate: DateTime;

    public getFull(data) {
        this.integrityId = data.integrityId;
        this.accussationList = data.accussationList;
        this.receivedChargeLetterDate = data.receivedChargeLetterDate;
    }
}