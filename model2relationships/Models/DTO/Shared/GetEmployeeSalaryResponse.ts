import { DateTime } from 'luxon';

export default class GetEmployeeSalaryResponse {
    public salary: EmployeeSalaryResponse = new EmployeeSalaryResponse();
}
export class EmployeeSalaryResponse {
    public effectiveDate: DateTime;
    public baseSalary: number;
    public ITKA: number;
    public ITP: number;
    public EPW: number;
    public COLA: number;

    public getFull(data) {
        this.effectiveDate = data.effectiveDate;
        this.baseSalary = data.baseSalary;
        this.ITKA = data.ITKA;
        this.ITP = data.ITP;
        this.EPW = data.EPW;
        this.COLA = data.COLA;
    }
}
