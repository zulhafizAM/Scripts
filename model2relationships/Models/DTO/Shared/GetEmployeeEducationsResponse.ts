export default class GetEmployeeEducationsResponse {
    public employee: EmployeeEducationResponse =
        new EmployeeEducationResponse();
}
export class EmployeeEducationResponse {
    public name: string = '';
    public type: string = '';
    public year: number;
    public finalGrade: string = '';
    public field: string = '';

    public getFull(data) {
        this.name = data.name;
        this.type = data.type;
        this.year = data.year;
        this.finalGrade = data.finalGrade;
        this.field = data.field;
    }
}
