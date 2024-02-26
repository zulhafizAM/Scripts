import { DateTime } from 'luxon';

export default class GetStateVisitAllowanceResponse {
    public stateVisitAllowance: StateVisitAllowanceResponse =
        new StateVisitAllowanceResponse();
}
export class StateVisitAllowanceResponse {
    public allowanceId: bigint;
    public stateId: bigint;
    public reason: string = '';
    public amount: number;
    public document: Blob;

    public getFull(data) {
        this.allowanceId = data.allowanceId;
        this.stateId = data.stateId;
        this.reason = data.reason;
        this.amount = data.amount;
        this.document = data.document;
    }
}