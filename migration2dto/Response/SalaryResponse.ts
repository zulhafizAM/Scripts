import { DateTime } from 'luxon';

export default class GetSalaryResponse {
    public salary: SalaryResponse =
        new SalaryResponse();
}
export class SalaryResponse {
    public employeeId: bigint;
    public revisionMonth: string = '';
    public EPFNumber: string = '';
    public SOSCONumber: string = '';
    public incomeNumber: string = '';
    public pensionNumber: string = '';
    public retirementBenefit: string = '';
    public effectiveDate: DateTime;
    public baseSalary: number;
    public ITKA: number;
    public COLA: number;
    public status: string = '';
    public remark: string = '';
    public isRetiringSoon: boolean;

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.revisionMonth = data.revisionMonth;
        this.EPFNumber = data.EPFNumber;
        this.SOSCONumber = data.SOSCONumber;
        this.incomeNumber = data.incomeNumber;
        this.pensionNumber = data.pensionNumber;
        this.retirementBenefit = data.retirementBenefit;
        this.effectiveDate = data.effectiveDate;
        this.baseSalary = data.baseSalary;
        this.ITKA = data.ITKA;
        this.COLA = data.COLA;
        this.status = data.status;
        this.remark = data.remark;
        this.isRetiringSoon = data.isRetiringSoon;
    }
}