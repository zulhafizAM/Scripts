import { DateTime } from 'luxon';

export default class GetExcellenceAwardHistoryResponse {
    public excellenceAwardHistory: ExcellenceAwardHistoryResponse =
        new ExcellenceAwardHistoryResponse();
}
export class ExcellenceAwardHistoryResponse {
    public employeeId: bigint;
    public excellenceAwardYear: number;

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.excellenceAwardYear = data.excellenceAwardYear;
    }
}