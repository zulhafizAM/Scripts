import { DateTime } from 'luxon';

export default class GetContractDetailResponse {
    public contractDetail: ContractDetailResponse =
        new ContractDetailResponse();
}
export class ContractDetailResponse {
    public candidateId: bigint;
    public serviceTypeId: bigint;
    public placementId: bigint;
    public contractEmployeeNumber: string = '';
    public applicationDate: DateTime;
    public contractStartDate: DateTime;
    public contractDuration: number;
    public wageRate: number;
    public designation: string = '';
    public reportDutyDate: DateTime;
    public EPFNumber: string = '';
    public leaveEntitlement: number;
    public document: Blob;
    public status: string = '';
    public remark: string = '';

    public getFull(data) {
        this.candidateId = data.candidateId;
        this.serviceTypeId = data.serviceTypeId;
        this.placementId = data.placementId;
        this.contractEmployeeNumber = data.contractEmployeeNumber;
        this.applicationDate = data.applicationDate;
        this.contractStartDate = data.contractStartDate;
        this.contractDuration = data.contractDuration;
        this.wageRate = data.wageRate;
        this.designation = data.designation;
        this.reportDutyDate = data.reportDutyDate;
        this.EPFNumber = data.EPFNumber;
        this.leaveEntitlement = data.leaveEntitlement;
        this.document = data.document;
        this.status = data.status;
        this.remark = data.remark;
    }
}