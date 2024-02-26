import { DateTime } from 'luxon';

export default class GetRaceResponse {
    public race: RaceResponse =
        new RaceResponse();
}
export class RaceResponse {
    public name: string = '';

    public getFull(data) {
        this.name = data.name;
    }
}