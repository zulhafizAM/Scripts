import { DateTime } from 'luxon';

export default class GetMovingOutResponse {
    public movingOut: MovingOutResponse =
        new MovingOutResponse();
}
export class MovingOutResponse {
    public quartersId: bigint;
    public applicationDate: DateTime;
    public status: string = '';
    public remark: string = '';
    public document: Blob;

    public getFull(data) {
        this.quartersId = data.quartersId;
        this.applicationDate = data.applicationDate;
        this.status = data.status;
        this.remark = data.remark;
        this.document = data.document;
    }
}