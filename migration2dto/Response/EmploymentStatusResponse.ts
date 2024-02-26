import { DateTime } from 'luxon';

export default class GetEmploymentStatusResponse {
    public employmentStatus: EmploymentStatusResponse =
        new EmploymentStatusResponse();
}
export class EmploymentStatusResponse {
    public name: string = '';

    public getFull(data) {
        this.name = data.name;
    }
}