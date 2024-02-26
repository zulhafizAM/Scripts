import { DateTime } from 'luxon';

export default class GetPenaltyTypeResponse {
    public penaltyType: PenaltyTypeResponse =
        new PenaltyTypeResponse();
}
export class PenaltyTypeResponse {
    public name: string = '';
    public description: string = '';

    public getFull(data) {
        this.name = data.name;
        this.description = data.description;
    }
}