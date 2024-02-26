import { DateTime } from 'luxon';

export default class GetSectionResponse {
    public section: SectionResponse =
        new SectionResponse();
}
export class SectionResponse {
    public name: string = '';
    public departmentId: bigint;

    public getFull(data) {
        this.name = data.name;
        this.departmentId = data.departmentId;
    }
}