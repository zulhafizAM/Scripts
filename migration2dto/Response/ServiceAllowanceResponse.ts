import { DateTime } from 'luxon';

export default class GetServiceAllowanceResponse {
    public serviceAllowance: ServiceAllowanceResponse =
        new ServiceAllowanceResponse();
}
export class ServiceAllowanceResponse {
    public allowanceId: bigint;
    public allowanceTypeId: bigint;
    public applicationDate: DateTime;
    public status: string = '';
    public remark: string = '';

    public getFull(data) {
        this.allowanceId = data.allowanceId;
        this.allowanceTypeId = data.allowanceTypeId;
        this.applicationDate = data.applicationDate;
        this.status = data.status;
        this.remark = data.remark;
    }
}