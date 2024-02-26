import { DateTime } from 'luxon';

export default class GetReligionResponse {
    public religion: ReligionResponse =
        new ReligionResponse();
}
export class ReligionResponse {
    public name: string = '';

    public getFull(data) {
        this.name = data.name;
    }
}