import { DateTime } from 'luxon';

export default class GetEmployeePersonalDetailResponse {
    public employee: EmployeePersonalDetailResponse =
        new EmployeePersonalDetailResponse();
}
export class EmployeePersonalDetailResponse {
    public employeeNo: string = '';
    public name: string = '';
    public otherName: string = '';
    public identityCard: string = '';
    public identityCardColor: string = '';
    public dateOfBirth: DateTime;
    public placeOfBirth: string = '';
    public nationality: string = '';
    public race: string = '';
    public religion: string = '';
    public gender: string = '';
    public status: string = '';
    public homeAddress: string = '';
    public mailAddress: string = '';
    public homeNo: string = '';
    public mobileNo: string = '';
    public housing: string = '';
    public houseLoan: number;
    public carLoan: string = '';
    public isExPolice: boolean = false;

    public getFull(data) {
        this.name = data.personalDetail.name;
        this.otherName = data.personalDetail.alternativeName;
        this.identityCard = data.personalDetail.identityDocumentNumber;
        this.identityCardColor = data.personalDetail.identityDocumentType;
        this.employeeNo = data.employeeNumber;
        this.dateOfBirth = data.personalDetail.birthDate;
        this.placeOfBirth = data.personalDetail.birthPlace;
        this.nationality = data.personalDetail.isMalaysian
            ? 'Malaysia'
            : 'Other Country';
        this.race = data.personalDetail.race.name;
        this.religion = data.personalDetail.religion.name;
        this.gender = data.personalDetail.gender;
        this.status = data.personalDetail.maritial;
        this.homeAddress = data.personalDetail.homeAddress;
        this.mailAddress = data.personalDetail.mailAddress;
        this.homeNo = data.personalDetail.homeNumber;
        this.mobileNo = data.personalDetail.mobileNo;
        this.housing = data.employeeSalary.allowance.houseAllowanceType;
        this.houseLoan = data.employeeSalary.allowance.houseAllowance;
        this.isExPolice = data.personalDetail.isExPoliceOrSoldier;
    }
}
