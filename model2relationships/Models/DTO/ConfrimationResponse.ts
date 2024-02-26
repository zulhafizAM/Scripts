import { DateTime } from 'luxon';

export default class ConfirmationDetailResponse {
    public employee: ConfrimationEmployeeResponse =
        new ConfrimationEmployeeResponse();
    public service: ConfirmationServiceResponse =
        new ConfirmationServiceResponse();
    public serviceExamination: ConfrimationExaminationResponse[] = [];
    public diciplinary: ConfirmationDiciplinaryResponse[] = [];
}
export class ConfrimationEmployeeResponse {
    public name: string = '';
    public otherName: string = '';
    public identityCard: string = '';
    public identityCardColor: string = '';
    public employeeNo: string = '';
    public dateOfBirth: string = '';
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
    public houseLoan: string = '';
    public carLoan: string = '';
    public isExPolice: boolean = false;

    public populate(data) {
        this.name = data.name;
        this.otherName = data.alternativeName;
        this.identityCard = data.identityDocumentNumber;
        this.identityCardColor = data.identityDocumentType;
        this.employeeNo =
            data.employee === null ? '-' : data.employee.employeeNumber;
        this.dateOfBirth = data.birthDate;
        this.placeOfBirth = data.birthPlace;
        this.nationality = data.isMalaysian ? 'Malaysia' : 'Other COuntry';
        this.race = data.race.name;
        this.religion = data.religion.name;
        this.gender = data.gender;
        this.status = data.maritial;
        this.homeAddress = data.homeAddress;
        this.mailAddress = data.mailAddress;
        this.homeNo = data.homeNumber;
        this.mobileNo = data.mobileNo;
        this.housing =
            data.employee === null
                ? ''
                : data.employee.employeeSalary.allowance.houseAllowanceType;
        this.houseLoan =
            data.employee === null
                ? ''
                : data.employee.employeeSalary.allowance.houseAllowance;
        this.isExPolice = data.isExPoliceOrSoldier;
    }
}
export class ConfirmationServiceResponse {
    public grade: string = '';
    public position: string = '';
    public placement: string = '';
    public serviceLevel: string = '';
    public hireDate: DateTime;
    public retirementType: string = '';
    public kwspNo: string = '';
    public maybankAccount: string = '';
    public program: string = '';
    public leaveEntitlement: string = '';
    public hireByGovermentDate: DateTime;
    public hireByLKIMDate: DateTime;
    public hireCurrentPositionDate: DateTime;
    public confirmedLKIM: string = '';
    public currentActing: string = '';
    public currentInterim: string | null = null;
    public enterPension: string = '';
    public lastSalary: string = '';
    public lastPromotion: string = '';
    public retirementDate: DateTime | null = null;
}
export class ConfiramtionSalaryAllowance {
    public effectiveDate: DateTime;
    public salaryMovement: number = 0.0;
    public baseSalary: number = 0.0;
    public itka: number = 0.0;
    public itp: number = 0.0;
    public epw: number = 0.0;
    public cola: number = 0.0;
}
export class ConfrimationExaminationResponse {
    public examinationName: string = '';
    public examinationDate: DateTime;
    public examinationResult: string = '';
    public passDate: DateTime;
}
export class ConfirmationDiciplinaryResponse {
    public result: string = '';
    public remarks: string = '';
}
