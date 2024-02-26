import { DateTime } from 'luxon';

export default class GetVoluntaryRetirementProcessResponse {
    public voluntaryRetirementProcess: VoluntaryRetirementProcessResponse =
        new VoluntaryRetirementProcessResponse();
}
export class VoluntaryRetirementProcessResponse {
    public voluntaryId: bigint;
    public certifierId: bigint;
    public certifiedStatus: string;
    public certifiedRemark: string;
    public certifiedDate: DateTime;
    public confirmerId: bigint;
    public confirmedStatus: string;
    public confirmedRemark: string;
    public confirmedDate: DateTime;
    public supporter1Id: bigint;
    public supported1Status: string;
    public supported1Remark: string;
    public supported1Date: DateTime;
    public supporter2Id: bigint;
    public supported2Status: string;
    public supported2Remark: string;
    public supported2Date: DateTime;
    public appointedApproverId: bigint;
    public appointedApprovedStatus: string;
    public appointedApprovedRemark: string;
    public appointedApprovedDate: DateTime;
    public secretaryApproverId: bigint;
    public secretaryApprovedStatus: string;
    public secretaryApprovedRemark: string;
    public secretaryApprovedDate: DateTime;
    public documentCertifierId: bigint;
    public documentCertifiedStatus: string;
    public documentCertifiedRemark: string;
    public documentCertifiedDate: DateTime;
    public letterCertifierId: bigint;
    public letterCertifiedStatus: string;
    public letterCertifiedRemark: string;
    public letterCertifiedDate: DateTime;

    public getFull(data) {
        this.voluntaryId = data.voluntaryId;
        this.certifierId = data.certifierId;
        this.certifiedStatus = data.certifiedStatus;
        this.certifiedRemark = data.certifiedRemark;
        this.certifiedDate = data.certifiedDate;
        this.confirmerId = data.confirmerId;
        this.confirmedStatus = data.confirmedStatus;
        this.confirmedRemark = data.confirmedRemark;
        this.confirmedDate = data.confirmedDate;
        this.supporter1Id = data.supporter1Id;
        this.supported1Status = data.supported1Status;
        this.supported1Remark = data.supported1Remark;
        this.supported1Date = data.supported1Date;
        this.supporter2Id = data.supporter2Id;
        this.supported2Status = data.supported2Status;
        this.supported2Remark = data.supported2Remark;
        this.supported2Date = data.supported2Date;
        this.appointedApproverId = data.appointedApproverId;
        this.appointedApprovedStatus = data.appointedApprovedStatus;
        this.appointedApprovedRemark = data.appointedApprovedRemark;
        this.appointedApprovedDate = data.appointedApprovedDate;
        this.secretaryApproverId = data.secretaryApproverId;
        this.secretaryApprovedStatus = data.secretaryApprovedStatus;
        this.secretaryApprovedRemark = data.secretaryApprovedRemark;
        this.secretaryApprovedDate = data.secretaryApprovedDate;
        this.documentCertifierId = data.documentCertifierId;
        this.documentCertifiedStatus = data.documentCertifiedStatus;
        this.documentCertifiedRemark = data.documentCertifiedRemark;
        this.documentCertifiedDate = data.documentCertifiedDate;
        this.letterCertifierId = data.letterCertifierId;
        this.letterCertifiedStatus = data.letterCertifiedStatus;
        this.letterCertifiedRemark = data.letterCertifiedRemark;
        this.letterCertifiedDate = data.letterCertifiedDate;
    }
}