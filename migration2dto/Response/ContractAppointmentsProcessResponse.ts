import { DateTime } from 'luxon';

export default class GetContractAppointmentsProcessResponse {
    public contractAppointmentsProcess: ContractAppointmentsProcessResponse =
        new ContractAppointmentsProcessResponse();
}
export class ContractAppointmentsProcessResponse {
    public contractId: bigint;
    public isFitCritirea: boolean;
    public supporterId: bigint;
    public supportedStatus: string;
    public supportedRemark: string;
    public supportedDate: DateTime;
    public approverId: bigint;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;

    public getFull(data) {
        this.contractId = data.contractId;
        this.isFitCritirea = data.isFitCritirea;
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