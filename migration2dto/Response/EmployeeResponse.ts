import { DateTime } from 'luxon';

export default class GetEmployeeResponse {
    public employee: EmployeeResponse =
        new EmployeeResponse();
}
export class EmployeeResponse {
    public personalDetailId: bigint;
    public positionId: bigint;
    public gradeId: bigint;
    public serviceTypeId: bigint;
    public serviceGroupId: bigint;
    public placementId: bigint;
    public unitId: bigint;
    public employmentStatusId: bigint;
    public employeeNumber: string = '';
    public retirementDate: DateTime;
    public programme: string = '';
    public eligibleLeaveCount: number;
    public newRecruitEffectiveDate: DateTime;
    public effectiveDate: DateTime;
    public civilServiceStartDate: DateTime;
    public firstServiceDate: DateTime;
    public firstConfirmServiceDate: DateTime;
    public currentServiceDate: DateTime;
    public officeNumber: string = '';
    public status: string = '';

    public getFull(data) {
        this.personalDetailId = data.personalDetailId;
        this.positionId = data.positionId;
        this.gradeId = data.gradeId;
        this.serviceTypeId = data.serviceTypeId;
        this.serviceGroupId = data.serviceGroupId;
        this.placementId = data.placementId;
        this.unitId = data.unitId;
        this.employmentStatusId = data.employmentStatusId;
        this.employeeNumber = data.employeeNumber;
        this.retirementDate = data.retirementDate;
        this.programme = data.programme;
        this.eligibleLeaveCount = data.eligibleLeaveCount;
        this.newRecruitEffectiveDate = data.newRecruitEffectiveDate;
        this.effectiveDate = data.effectiveDate;
        this.civilServiceStartDate = data.civilServiceStartDate;
        this.firstServiceDate = data.firstServiceDate;
        this.firstConfirmServiceDate = data.firstConfirmServiceDate;
        this.currentServiceDate = data.currentServiceDate;
        this.officeNumber = data.officeNumber;
        this.status = data.status;
    }
}