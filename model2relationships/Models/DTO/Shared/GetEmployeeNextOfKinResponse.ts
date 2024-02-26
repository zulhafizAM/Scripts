import { DateTime } from 'luxon';

export default class GetEmployeeNextOfKinResponse {
    public employee: EmployeeNextOfKinResponse =
        new EmployeeNextOfKinResponse();
}
export class EmployeeNextOfKinResponse {
    public name: string = '';
    public identityDocumentNumber: string = '';
    public birthDate: DateTime;
    public relationship: string = '';
    public marriageDate: DateTime;
    public icColor: string = '';
    public homeNumber: string = '';
    public phoneNumber: string = '';
    public occupation: string = '';
    public company: string = '';
    public companyAddress: string = '';

    public getFull(data) {
        this.name = data.name;
        this.identityDocumentNumber = data.identityDocumentNumber;
        this.birthDate = data.birthDate;
        this.relationship = data.relationship;
        this.marriageDate = data.marriageDate;
        this.icColor = data.icColor;
        this.homeNumber = data.homeNumber;
        this.phoneNumber = data.phoneNumber;
        this.occupation = data.occupation;
        this.company = data.company;
        this.companyAddress = data.companyAddress;
    }
}
