import { DateTime } from 'luxon';

export default class GetOnSuspensionOrDismissalResponse {
    public onSuspensionOrDismissal: OnSuspensionOrDismissalResponse =
        new OnSuspensionOrDismissalResponse();
}
export class OnSuspensionOrDismissalResponse {
    public integrityId: bigint;
    public effectiveDate: DateTime;
    public isEmolumenReceived: boolean;

    public getFull(data) {
        this.integrityId = data.integrityId;
        this.effectiveDate = data.effectiveDate;
        this.isEmolumenReceived = data.isEmolumenReceived;
    }
}