import { DateTime } from 'luxon';

export default class GetFuneralArrangementRequestResponse {
    public funeralArrangementRequest: FuneralArrangementRequestResponse =
        new FuneralArrangementRequestResponse();
}
export class FuneralArrangementRequestResponse {
    public allowanceId: bigint;
    public deathDate: DateTime;
    public document: Blob;

    public getFull(data) {
        this.allowanceId = data.allowanceId;
        this.deathDate = data.deathDate;
        this.document = data.document;
    }
}