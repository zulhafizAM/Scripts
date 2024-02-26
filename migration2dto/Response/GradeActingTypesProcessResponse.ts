import { DateTime } from 'luxon';

export default class GetGradeActingTypesProcessResponse {
    public gradeActingTypesProcess: GradeActingTypesProcessResponse =
        new GradeActingTypesProcessResponse();
}
export class GradeActingTypesProcessResponse {
    public actingId: bigint;
    public integrityCertifierId: bigint;
    public integrityCertifiedStatus: string;
    public integrityCertifiedRemark: string;
    public integrityCertifiedDate: DateTime;
    public directorCertifierId: bigint;
    public directorCertifiedStatus: string;
    public directorCertifiedRemark: string;
    public directorCertifiedDate: DateTime;
    public supporterId: bigint;
    public supportedStatus: string;
    public supportedRemark: string;
    public supportedDate: DateTime;
    public approverId: bigint;
    public approvedStatus: string;
    public approvedRemark: string;
    public approvedDate: DateTime;

    public getFull(data) {
        this.actingId = data.actingId;
        this.integrityCertifierId = data.integrityCertifierId;
        this.integrityCertifiedStatus = data.integrityCertifiedStatus;
        this.integrityCertifiedRemark = data.integrityCertifiedRemark;
        this.integrityCertifiedDate = data.integrityCertifiedDate;
        this.directorCertifierId = data.directorCertifierId;
        this.directorCertifiedStatus = data.directorCertifiedStatus;
        this.directorCertifiedRemark = data.directorCertifiedRemark;
        this.directorCertifiedDate = data.directorCertifiedDate;
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