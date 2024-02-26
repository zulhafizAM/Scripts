import { DateTime } from 'luxon';

export default class GetMovingInResponse {
    public movingIn: MovingInResponse =
        new MovingInResponse();
}
export class MovingInResponse {
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