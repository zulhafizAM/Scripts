import { DateTime } from 'luxon';
import { BaseResponse } from './BaseResponse';

export default class ConfirmationsResponse extends BaseResponse<ConfirmationResponse> {
    private confirmationList: ConfirmationResponse[] = [];

    public get confirmations(): ConfirmationResponse[] {
        return this.confirmationList;
    }

    public set confirmations(v: ConfirmationResponse[]) {
        this.confirmationList = v;
        this.currentPageSize = this.confirmationList.length;
    }
}

class ConfirmationResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public positionByBoard: string;
    public employedDate: DateTime;
    public currentPosition: string;
    public currentPlacement: string;
    public serviceExamination: string;
    public lnpt: number;
    public status: string;
}
