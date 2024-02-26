import { DateTime } from 'luxon';

export default class GetSalaryDeductionResponse {
    public salaryDeduction: SalaryDeductionResponse =
        new SalaryDeductionResponse();
}
export class SalaryDeductionResponse {
    public salaryDetailId: bigint;
    public totalLoan: number;
    public quarterRent: number;
    public penaltyFee: number;
    public unpaidDeduction: number;
    public sickLeaveDeduction: number;
    public medicalArrearsFee: number;
    public others: number;

    public getFull(data) {
        this.salaryDetailId = data.salaryDetailId;
        this.totalLoan = data.totalLoan;
        this.quarterRent = data.quarterRent;
        this.penaltyFee = data.penaltyFee;
        this.unpaidDeduction = data.unpaidDeduction;
        this.sickLeaveDeduction = data.sickLeaveDeduction;
        this.medicalArrearsFee = data.medicalArrearsFee;
        this.others = data.others;
    }
}