import { DateTime } from 'luxon';

export default class GetServiceConfirmationProcessResponse {
    public serviceConfirmationProcess: ServiceConfirmationProcessResponse =
        new ServiceConfirmationProcessResponse();
}
export class ServiceConfirmationProcessResponse {
    public integrityCertifierId: bigint;
    public integrityCertifiedStatus: string;
    public integrityCertifiedRemark: string;
    public integrityCertifiedDate: DateTime;
    public directorCertifierId: bigint;
    public directorCertifiedStatus: string;
    public directorCertifiedRemark: string;
    public directorCertifiedDate: DateTime;

    public getFull(data) {
        this.integrityCertifierId = data.integrityCertifierId;
        this.integrityCertifiedStatus = data.integrityCertifiedStatus;
        this.integrityCertifiedRemark = data.integrityCertifiedRemark;
        this.integrityCertifiedDate = data.integrityCertifiedDate;
        this.directorCertifierId = data.directorCertifierId;
        this.directorCertifiedStatus = data.directorCertifiedStatus;
        this.directorCertifiedRemark = data.directorCertifiedRemark;
        this.directorCertifiedDate = data.directorCertifiedDate;
    }
}