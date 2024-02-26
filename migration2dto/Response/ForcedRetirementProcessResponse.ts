import { DateTime } from 'luxon';

export default class GetForcedRetirementProcessResponse {
    public forcedRetirementProcess: ForcedRetirementProcessResponse =
        new ForcedRetirementProcessResponse();
}
export class ForcedRetirementProcessResponse {
    public forcedId: bigint;
    public certifierId: bigint;
    public certifiedStatus: string;
    public certifiedRemark: string;
    public certifiedDate: DateTime;
    public confirmerId: bigint;
    public confirmedStatus: string;
    public confirmedRemark: string;
    public confirmedDate: DateTime;

    public getFull(data) {
        this.forcedId = data.forcedId;
        this.certifierId = data.certifierId;
        this.certifiedStatus = data.certifiedStatus;
        this.certifiedRemark = data.certifiedRemark;
        this.certifiedDate = data.certifiedDate;
        this.confirmerId = data.confirmerId;
        this.confirmedStatus = data.confirmedStatus;
        this.confirmedRemark = data.confirmedRemark;
        this.confirmedDate = data.confirmedDate;
    }
}