import { DateTime } from 'luxon';

export default class GetMovingOutProcessResponse {
    public movingOutProcess: MovingOutProcessResponse =
        new MovingOutProcessResponse();
}
export class MovingOutProcessResponse {
    public movingOutId: bigint;
    public verifierId: bigint;
    public verifiedStatus: string;
    public verifiedRemark: string;
    public verifiedDate: DateTime;
    public directorApproverId: bigint;
    public directorApprovedStatus: string;
    public directorApprovedRemark: string;
    public directorApprovedDate: DateTime;

    public getFull(data) {
        this.movingOutId = data.movingOutId;
        this.verifierId = data.verifierId;
        this.verifiedStatus = data.verifiedStatus;
        this.verifiedRemark = data.verifiedRemark;
        this.verifiedDate = data.verifiedDate;
        this.directorApproverId = data.directorApproverId;
        this.directorApprovedStatus = data.directorApprovedStatus;
        this.directorApprovedRemark = data.directorApprovedRemark;
        this.directorApprovedDate = data.directorApprovedDate;
    }
}