import { DateTime } from 'luxon';

export default class GetPersonalInsuranceProcessResponse {
    public personalInsuranceProcess: PersonalInsuranceProcessResponse =
        new PersonalInsuranceProcessResponse();
}
export class PersonalInsuranceProcessResponse {
    public insuranceId: bigint;
    public verifierId: bigint;
    public verifiedStatus: string;
    public verifiedRemark: string;
    public verifiedDate: DateTime;
    public supporterId: bigint;
    public supportedStatus: string;
    public supportedRemark: string;
    public supportedDate: DateTime;
    public approverId: bigint;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;

    public getFull(data) {
        this.insuranceId = data.insuranceId;
        this.verifierId = data.verifierId;
        this.verifiedStatus = data.verifiedStatus;
        this.verifiedRemark = data.verifiedRemark;
        this.verifiedDate = data.verifiedDate;
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