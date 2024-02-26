import { DateTime } from 'luxon';

export default class GetSentencingResponse {
    public sentencing: SentencingResponse =
        new SentencingResponse();
}
export class SentencingResponse {
    public integrityId: bigint;
    public penaltyTypeId: bigint;

    public getFull(data) {
        this.integrityId = data.integrityId;
        this.penaltyTypeId = data.penaltyTypeId;
    }
}