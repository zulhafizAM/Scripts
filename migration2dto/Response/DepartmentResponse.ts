import { DateTime } from 'luxon';

export default class GetDepartmentResponse {
    public department: DepartmentResponse =
        new DepartmentResponse();
}
export class DepartmentResponse {
    public name: string = '';

    public getFull(data) {
        this.name = data.name;
    }
}