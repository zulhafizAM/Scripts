import { DateTime } from 'luxon';

export default class GetCancelSuspensionOrDismissalResponse {
    public cancelSuspensionOrDismissal: CancelSuspensionOrDismissalResponse =
        new CancelSuspensionOrDismissalResponse();
}
export class CancelSuspensionOrDismissalResponse {
    public integrityId: bigint;
    public effectiveDate: DateTime;
    public isReturningDuty: boolean;

    public getFull(data) {
        this.integrityId = data.integrityId;
        this.effectiveDate = data.effectiveDate;
        this.isReturningDuty = data.isReturningDuty;
    }
}