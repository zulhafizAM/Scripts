import { DateTime } from 'luxon';

export default class GetFundReimbursementProcessResponse {
    public fundReimbursementProcess: FundReimbursementProcessResponse =
        new FundReimbursementProcessResponse();
}
export class FundReimbursementProcessResponse {
    public fundId: bigint;
    public confirmerId: bigint;
    public confirmedStatus: string;
    public confirmedRemark: string;
    public confirmedDate: DateTime;
    public verifierId: bigint;
    public verifiedStatus: string;
    public verifiedRemark: string;
    public verifiedDate: DateTime;

    public getFull(data) {
        this.fundId = data.fundId;
        this.confirmerId = data.confirmerId;
        this.confirmedStatus = data.confirmedStatus;
        this.confirmedRemark = data.confirmedRemark;
        this.confirmedDate = data.confirmedDate;
        this.verifierId = data.verifierId;
        this.verifiedStatus = data.verifiedStatus;
        this.verifiedRemark = data.verifiedRemark;
        this.verifiedDate = data.verifiedDate;
    }
}