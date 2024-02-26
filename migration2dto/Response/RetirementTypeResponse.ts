import { DateTime } from 'luxon';

export default class GetRetirementTypeResponse {
    public retirementType: RetirementTypeResponse =
        new RetirementTypeResponse();
}
export class RetirementTypeResponse {
    public name: string = '';

    public getFull(data) {
        this.name = data.name;
    }
}