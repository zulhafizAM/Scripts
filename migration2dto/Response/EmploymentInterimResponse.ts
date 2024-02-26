import { DateTime } from 'luxon';

export default class GetEmploymentInterimResponse {
    public employmentInterim: EmploymentInterimResponse =
        new EmploymentInterimResponse();
}
export class EmploymentInterimResponse {
    public employeeId: bigint;
    public positionId: bigint;
    public gradeId: bigint;
    public departmentId: bigint;
    public placementId: bigint;
    public applicationDate: DateTime;
    public referenceNumber: string = '';
    public startDate: DateTime;
    public endDate: DateTime;
    public duration: number;
    public status: string = '';
    public remark: string = '';
    public reason: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.positionId = data.positionId;
        this.gradeId = data.gradeId;
        this.departmentId = data.departmentId;
        this.placementId = data.placementId;
        this.applicationDate = data.applicationDate;
        this.referenceNumber = data.referenceNumber;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.duration = data.duration;
        this.status = data.status;
        this.remark = data.remark;
        this.reason = data.reason;
    }
}