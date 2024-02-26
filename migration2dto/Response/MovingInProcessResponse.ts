import { DateTime } from 'luxon';

export default class GetMovingInProcessResponse {
    public movingInProcess: MovingInProcessResponse =
        new MovingInProcessResponse();
}
export class MovingInProcessResponse {
    public movingInId: bigint;
    public verifierId: bigint;
    public verifiedStatus: string;
    public verifiedRemark: string;
    public verifiedDate: DateTime;
    public secretaryApproverId: bigint;
    public secretaryApprovedStatus: string;
    public secretaryApprovedRemark: string;
    public secretaryApprovedDate: DateTime;
    public directorApproverId: bigint;
    public directorApprovedStatus: string;
    public directorApprovedRemark: string;
    public directorApprovedDate: DateTime;

    public getFull(data) {
        this.movingInId = data.movingInId;
        this.verifierId = data.verifierId;
        this.verifiedStatus = data.verifiedStatus;
        this.verifiedRemark = data.verifiedRemark;
        this.verifiedDate = data.verifiedDate;
        this.secretaryApproverId = data.secretaryApproverId;
        this.secretaryApprovedStatus = data.secretaryApprovedStatus;
        this.secretaryApprovedRemark = data.secretaryApprovedRemark;
        this.secretaryApprovedDate = data.secretaryApprovedDate;
        this.directorApproverId = data.directorApproverId;
        this.directorApprovedStatus = data.directorApprovedStatus;
        this.directorApprovedRemark = data.directorApprovedRemark;
        this.directorApprovedDate = data.directorApprovedDate;
    }
}