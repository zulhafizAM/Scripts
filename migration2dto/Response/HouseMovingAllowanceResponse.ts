import { DateTime } from 'luxon';

export default class GetHouseMovingAllowanceResponse {
    public houseMovingAllowance: HouseMovingAllowanceResponse =
        new HouseMovingAllowanceResponse();
}
export class HouseMovingAllowanceResponse {
    public allowanceId: bigint;
    public movingDate: DateTime;
    public oldAddress: string = '';
    public newAddress: string = '';
    public document: Blob;

    public getFull(data) {
        this.allowanceId = data.allowanceId;
        this.movingDate = data.movingDate;
        this.oldAddress = data.oldAddress;
        this.newAddress = data.newAddress;
        this.document = data.document;
    }
}