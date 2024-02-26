import { DateTime } from 'luxon';
import { BaseResponse } from './BaseResponse';

export default class SelfTransfersResponse extends BaseResponse<SelfTransferResponse> {
    private selfTransferList: SelfTransferResponse[] = [];
    public get selfTransfers(): SelfTransferResponse[] {
        return this.selfTransferList;
    }
    public set selfTransfers(v: SelfTransferResponse[]) {
        this.selfTransferList = v;
        this.currentPageSize = this.selfTransferList.length;
    }
}

export class SelfTransferResponse {
    public employeeNo: string = '';
    public employeeName: string = '';
    public identityCardNo: string = '';
    public transferType: string = '';
    public applicationDate: DateTime;
    public applicationResult: string = '';
    public status: string = '';
    public remark: string = '';
    public firstChoice: string;
    public secondChoice: string;
    public reason: string;
    public distanceFromWork: number;
}
