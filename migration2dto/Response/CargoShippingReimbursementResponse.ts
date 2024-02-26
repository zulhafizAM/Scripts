import { DateTime } from 'luxon';

export default class GetCargoShippingReimbursementResponse {
    public cargoShippingReimbursement: CargoShippingReimbursementResponse =
        new CargoShippingReimbursementResponse();
}
export class CargoShippingReimbursementResponse {
    public allowanceId: bigint;
    public startShippingDate: DateTime;
    public endShippingDate: DateTime;
    public startPoint: string = '';
    public endPoint: string = '';
    public distance: number;
    public reason: string = '';
    public document: Blob;

    public getFull(data) {
        this.allowanceId = data.allowanceId;
        this.startShippingDate = data.startShippingDate;
        this.endShippingDate = data.endShippingDate;
        this.startPoint = data.startPoint;
        this.endPoint = data.endPoint;
        this.distance = data.distance;
        this.reason = data.reason;
        this.document = data.document;
    }
}