import { DateTime } from 'luxon';

export default class GetPlacementResponse {
    public placement: PlacementResponse =
        new PlacementResponse();
}
export class PlacementResponse {
    public name: string = '';

    public getFull(data) {
        this.name = data.name;
    }
}