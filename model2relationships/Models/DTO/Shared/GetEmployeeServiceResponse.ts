import { DateTime } from 'luxon';

export default class GetEmployeeServiceResponse {
    public service: EmployeeServiceResponse = new EmployeeServiceResponse();
}
export class EmployeeServiceResponse {
    public grade: string = '';
    public position: string = '';
    public placement: string = '';
    public serviceLevel: string = '';
    public hireDate: DateTime;
    public retirementType: string = '';
    public EPFNumber: string = '';
    public SOCSONumber: string = '';
    public incomeNumber: string = '';
    public bankName: string = '';
    public bankAccount: string = '';
    public program: string = '';
    public unit: string = '';
    public leaveEntitlement: number;
    public hireByGovermentDate: DateTime;
    public hireByLKIMDate: DateTime;
    public currentServiceStartDate: DateTime;
    public firstServiceConfirmedDate: DateTime;
    public currentServiceConfirmedDate: DateTime;
    public hireCurrentPositionDate: DateTime;
    public currentActing: string = '';
    public currentInterim: string | null = null;
    public enterPension: string = '';
    public lastSalary: string = '';
    public lastPromotion: string = '';
    public retirementDate: DateTime | null = null;
    public effectiveDate: DateTime | null = null;
    public baseSalary: number;
    public ITKA: number;
    public ITP: number;
    public EPW: number;
    public COLA: number;

    public getFull(data) {
        this.grade = data.grade.code;
        this.position = data.position.name;
        this.placement = data.placement.name;
        this.serviceLevel = '?';
        this.retirementType = data.employeeSalary.retirementBenefit;
        this.EPFNumber = data.employeeSalary.EPFNumber;
        this.SOCSONumber = data.employeeSalary.SOSCONumber;
        this.incomeNumber = data.employeeSalary.incomeNumber;
        this.bankName = data.personalDetail.bankName;
        this.bankAccount = data.personalDetail.bankAccount;
        this.program = data.programme;
        this.leaveEntitlement = data.eligibleLeaveCount;
        this.hireByGovermentDate = data.civilServiceStartDate;
        this.hireByLKIMDate = data.firstServiceDate;
        this.currentServiceStartDate = data.serviceDate;
        this.firstServiceConfirmedDate = data.firstConfirmServiceDate;
        this.currentServiceConfirmedDate = data.serviceDate;
        this.currentActing = '?';
        this.currentInterim = '?';
        this.enterPension = '?';
        this.lastSalary = '?';
        this.lastPromotion = '?';
        this.retirementDate = data.retirementDate;
        this.effectiveDate = data.employeeSalary.effectiveDate;
        this.baseSalary = data.employeeSalary.baseSalary;
        this.ITKA = data.employeeSalary.ITKA;
        this.ITP = 0;
        this.EPW = 0;
        this.COLA = data.employeeSalary.COLA;
    }
}
