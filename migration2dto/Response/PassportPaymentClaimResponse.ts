import { DateTime } from 'luxon';

export default class GetPassportPaymentClaimResponse {
    public passportPaymentClaim: PassportPaymentClaimResponse =
        new PassportPaymentClaimResponse();
}
export class PassportPaymentClaimResponse {
    public allowanceId: bigint;
    public renewDate: DateTime;
    public reason: string = '';
    public document: Blob;

    public getFull(data) {
        this.allowanceId = data.allowanceId;
        this.renewDate = data.renewDate;
        this.reason = data.reason;
        this.document = data.document;
    }
}