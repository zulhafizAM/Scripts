import { DateTime } from 'luxon';

export default class GetPerformanceResponse {
    public performance: PerformanceResponse =
        new PerformanceResponse();
}
export class PerformanceResponse {
    public employeeId: bigint;
    public PPKEmployeeId: bigint;
    public PPPEmployeeId: bigint;
    public year: number;
    public reviewDuration: number;
    public JPAFormPerformance: string = '';
    public insertDate: DateTime;
    public propertyStatus: string = '';
    public approvedPropertyDate: DateTime;
    public gradeMarkPPP: number;
    public gradeMarkPPK: number;
    public skillMarkPPP: number;
    public skillMarkPPK: number;
    public individualMarkPPP: number;
    public individualMarkPPK: number;
    public contributeMarkPPP: number;
    public contributeMarkPPK: number;
    public PPP: number;
    public PPK: number;
    public average: number;
    public PPSM: number;
    public isAmend: boolean;
    public description: string = '';
    public salaryMovement: string = '';
    public justification: string = '';
    public yearlyAPC: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.PPKEmployeeId = data.PPKEmployeeId;
        this.PPPEmployeeId = data.PPPEmployeeId;
        this.year = data.year;
        this.reviewDuration = data.reviewDuration;
        this.JPAFormPerformance = data.JPAFormPerformance;
        this.insertDate = data.insertDate;
        this.propertyStatus = data.propertyStatus;
        this.approvedPropertyDate = data.approvedPropertyDate;
        this.gradeMarkPPP = data.gradeMarkPPP;
        this.gradeMarkPPK = data.gradeMarkPPK;
        this.skillMarkPPP = data.skillMarkPPP;
        this.skillMarkPPK = data.skillMarkPPK;
        this.individualMarkPPP = data.individualMarkPPP;
        this.individualMarkPPK = data.individualMarkPPK;
        this.contributeMarkPPP = data.contributeMarkPPP;
        this.contributeMarkPPK = data.contributeMarkPPK;
        this.PPP = data.PPP;
        this.PPK = data.PPK;
        this.average = data.average;
        this.PPSM = data.PPSM;
        this.isAmend = data.isAmend;
        this.description = data.description;
        this.salaryMovement = data.salaryMovement;
        this.justification = data.justification;
        this.yearlyAPC = data.yearlyAPC;
    }
}