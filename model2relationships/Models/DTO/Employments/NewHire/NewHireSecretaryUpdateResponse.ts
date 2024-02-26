import { DateTime } from 'luxon';

export default class NewHireSecretaryUpdateResponse {
    public isReadonly: boolean;
    public gradeId: bigint;
    public positionId: bigint;
    public placementId: bigint;
    public serviceTypeId: bigint;
    public effectiveDate: DateTime;
    public retirementBenefit: string;
    public epfNumber: string;
    public socsoNumber: string;
    public incomeNumber: string;
    public bankName: string;
    public bankAccount: string;
    public programme: string;
    public eligibleLeaveCount: number;
    public civilServiceStartDate: DateTime;
    public newRecruitEffectiveDate: DateTime;
    public serviceDate: DateTime;
    public firstServiceDate: DateTime;
    public firstConfirmServiceDate: DateTime;
    public pensionNumber: string;
    public kgt: number;
    public retirementDate: DateTime;
    public revisionMonth: string;
    public maximumSalary: number;
    public baseSalary: number;
    public itka: number;
    public itp: number;
    public epw: number;
    public cola: number;
}
