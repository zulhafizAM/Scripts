export default class GetEmployeeDependentsResponse {
    public employee: EmployeeDependentResponse =
        new EmployeeDependentResponse();
}
export class EmployeeDependentResponse {
    public name: string = '';
    public identityDocumentNumber: string = '';
    public gender: string = '';
    public relationship: string = '';
    public occupation: string = '';
    public inSchool: boolean;

    public getFull(data) {
        this.name = data.name;
        this.identityDocumentNumber = data.identityDocumentNumber;
        this.gender = data.gender;
        this.relationship = data.relationship;
        this.occupation = data.occupation;
        this.inSchool = data.inSchool;
    }
}
