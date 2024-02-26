import { DateTime } from 'luxon';

export default class GetClinicApproveProcessResponse {
    public clinicApproveProcess: ClinicApproveProcessResponse =
        new ClinicApproveProcessResponse();
}
export class ClinicApproveProcessResponse {
    public clinicId: bigint;
    public comfirmerId: bigint;
    public comfirmedStatus: string;
    public comfirmedRemark: string;
    public comfirmedDate: DateTime;
    public supporterId: bigint;
    public supportedStatus: string;
    public supportedRemark: string;
    public supportedDate: DateTime;
    public approverId: bigint;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;

    public getFull(data) {
        this.clinicId = data.clinicId;
        this.comfirmerId = data.comfirmerId;
        this.comfirmedStatus = data.comfirmedStatus;
        this.comfirmedRemark = data.comfirmedRemark;
        this.comfirmedDate = data.comfirmedDate;
        this.supporterId = data.supporterId;
        this.supportedStatus = data.supportedStatus;
        this.supportedRemark = data.supportedRemark;
        this.supportedDate = data.supportedDate;
        this.approverId = data.approverId;
        this.approvedStatus = data.approvedStatus;
        this.approvedRemark = data.approvedRemark;
        this.approvedDate = data.approvedDate;
    }
}