import { DateTime } from 'luxon';

export default class GetEmployeeWelfareFundProcessResponse {
    public employeeWelfareFundProcess: EmployeeWelfareFundProcessResponse =
        new EmployeeWelfareFundProcessResponse();
}
export class EmployeeWelfareFundProcessResponse {
    public welfareFundId: bigint;
    public directorSupporterId: bigint;
    public directorSupportedStatus: string;
    public directorSupportedRemark: string;
    public directorSupportedDate: DateTime;
    public verifierId: bigint;
    public verifiedStatus: string;
    public verifiedRemark: string;
    public verifiedDate: DateTime;
    public appointedSupporterId: bigint;
    public appointedSupportedStatus: string;
    public appointedSupportedRemark: string;
    public appointedSupportedDate: DateTime;
    public approverId: bigint;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;

    public getFull(data) {
        this.welfareFundId = data.welfareFundId;
        this.directorSupporterId = data.directorSupporterId;
        this.directorSupportedStatus = data.directorSupportedStatus;
        this.directorSupportedRemark = data.directorSupportedRemark;
        this.directorSupportedDate = data.directorSupportedDate;
        this.verifierId = data.verifierId;
        this.verifiedStatus = data.verifiedStatus;
        this.verifiedRemark = data.verifiedRemark;
        this.verifiedDate = data.verifiedDate;
        this.appointedSupporterId = data.appointedSupporterId;
        this.appointedSupportedStatus = data.appointedSupportedStatus;
        this.appointedSupportedRemark = data.appointedSupportedRemark;
        this.appointedSupportedDate = data.appointedSupportedDate;
        this.approverId = data.approverId;
        this.approvedStatus = data.approvedStatus;
        this.approvedRemark = data.approvedRemark;
        this.approvedDate = data.approvedDate;
    }
}