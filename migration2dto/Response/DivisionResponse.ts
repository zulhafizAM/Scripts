import { DateTime } from 'luxon';

export default class GetDivisionResponse {
    public division: DivisionResponse =
        new DivisionResponse();
}
export class DivisionResponse {
    public name: string = '';
    public stateId: bigint;

    public getFull(data) {
        this.name = data.name;
        this.stateId = data.stateId;
    }
}