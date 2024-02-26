import { DateTime } from 'luxon';

export default class GetPersonalTravelInsuranceClaimResponse {
    public personalTravelInsuranceClaim: PersonalTravelInsuranceClaimResponse =
        new PersonalTravelInsuranceClaimResponse();
}
export class PersonalTravelInsuranceClaimResponse {
    public allowanceId: bigint;
    public insuranceTypes: string = '';
    public startTravelDate: DateTime;
    public endTravelDate: DateTime;
    public reason: string = '';
    public region: string = '';
    public document: Blob;

    public getFull(data) {
        this.allowanceId = data.allowanceId;
        this.insuranceTypes = data.insuranceTypes;
        this.startTravelDate = data.startTravelDate;
        this.endTravelDate = data.endTravelDate;
        this.reason = data.reason;
        this.region = data.region;
        this.document = data.document;
    }
}