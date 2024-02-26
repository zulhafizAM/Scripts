import { DateTime } from 'luxon';

export default class GetConfirmationMoreThan3Response {
    public confirmationMoreThan3: ConfirmationMoreThan3Response =
        new ConfirmationMoreThan3Response();
}
export class ConfirmationMoreThan3Response {
    public employeeId: bigint;
    public verifierId: bigint;
    public verifiedStatus: string;
    public verifiedRemark: string;
    public verifiedDate: DateTime;
    public status: string = '';
    public remark: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.verifierId = data.verifierId;
        this.verifiedStatus = data.verifiedStatus;
        this.verifiedRemark = data.verifiedRemark;
        this.verifiedDate = data.verifiedDate;
        this.status = data.status;
        this.remark = data.remark;
    }
}