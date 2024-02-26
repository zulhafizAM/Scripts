export default class GetEmployeeExperiencesResponse {
    public employee: EmployeeExperienceResponse =
        new EmployeeExperienceResponse();
}
export class EmployeeExperienceResponse {
    public company: string = '';
    public address: string = '';
    public position: string = '';
    public grade: string = '';
    public serviceDuration: number;
    public salary: number;

    public getFull(data) {
        this.company = data.company;
        this.address = data.address;
        this.position = data.position;
        this.grade = data.grade;
        this.serviceDuration = data.serviceDuration;
        this.salary = data.salary;
    }
}
