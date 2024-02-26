import { DateTime } from 'luxon';

export default class GetDisciplinaryActionTypeResponse {
    public disciplinaryActionType: DisciplinaryActionTypeResponse =
        new DisciplinaryActionTypeResponse();
}
export class DisciplinaryActionTypeResponse {
    public name: string = '';
    public description: string = '';

    public getFull(data) {
        this.name = data.name;
        this.description = data.description;
    }
}