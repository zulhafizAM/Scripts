import { DateTime } from 'luxon';

export default class GetForcedTransferByManagementResponse {
    public forcedTransferByManagement: ForcedTransferByManagementResponse =
        new ForcedTransferByManagementResponse();
}
export class ForcedTransferByManagementResponse {
    public employeeId: bigint;
    public newPlacementId: bigint;
    public isPostpone: boolean;
    public reason: string = '';
    public transferDate: DateTime;
    public startDate: DateTime;
    public status: string = '';
    public remark: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.newPlacementId = data.newPlacementId;
        this.isPostpone = data.isPostpone;
        this.reason = data.reason;
        this.transferDate = data.transferDate;
        this.startDate = data.startDate;
        this.status = data.status;
        this.remark = data.remark;
    }
}