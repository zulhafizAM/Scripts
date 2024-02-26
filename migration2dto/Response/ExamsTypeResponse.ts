import { DateTime } from 'luxon';

export default class GetExamsTypeResponse {
    public examsType: ExamsTypeResponse =
        new ExamsTypeResponse();
}
export class ExamsTypeResponse {
    public name: string = '';

    public getFull(data) {
        this.name = data.name;
    }
}