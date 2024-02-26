import { DateTime } from 'luxon';

export default class GetUnitResponse {
    public unit: UnitResponse =
        new UnitResponse();
}
export class UnitResponse {
    public name: string = '';
    public departmentId: bigint;
    public sectionId: bigint;

    public getFull(data) {
        this.name = data.name;
        this.departmentId = data.departmentId;
        this.sectionId = data.sectionId;
    }
}