import { DateTime } from 'luxon';

export default class GetStateResponse {
    public state: StateResponse =
        new StateResponse();
}
export class StateResponse {
    public name: string = '';

    public getFull(data) {
        this.name = data.name;
    }
}