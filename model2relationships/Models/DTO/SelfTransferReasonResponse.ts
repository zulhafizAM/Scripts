import { DateTime } from 'luxon';

export class SelfTransferReasonResponse {
    public reason: string = '';
    public remark: string = '';
    public distanceFromWork: number;
    public employerName: string = '';
    public startServiceDate: DateTime;
}
