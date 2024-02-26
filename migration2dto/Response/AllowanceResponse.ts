import { DateTime } from 'luxon';

export default class GetAllowanceResponse {
    public allowance: AllowanceResponse =
        new AllowanceResponse();
}
export class AllowanceResponse {
    public salaryDetailId: bigint;
    public interim: number;
    public acting: number;
    public transfer: number;
    public houseAllowanceType: string = '';
    public houseAllowance: number;
    public transferAllowance: number;

    public getFull(data) {
        this.salaryDetailId = data.salaryDetailId;
        this.interim = data.interim;
        this.acting = data.acting;
        this.transfer = data.transfer;
        this.houseAllowanceType = data.houseAllowanceType;
        this.houseAllowance = data.houseAllowance;
        this.transferAllowance = data.transferAllowance;
    }
}