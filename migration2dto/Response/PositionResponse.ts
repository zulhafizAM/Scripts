import { DateTime } from 'luxon';

export default class GetPositionResponse {
    public position: PositionResponse =
        new PositionResponse();
}
export class PositionResponse {
    public name: string = '';
    public gradeId: bigint;

    public getFull(data) {
        this.name = data.name;
        this.gradeId = data.gradeId;
    }
}