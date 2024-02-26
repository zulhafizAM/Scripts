import { DateTime } from 'luxon';
import { BaseResponse } from '../../BaseResponse';

export default class PensionDetailsResponse extends BaseResponse<PensionDetailResponse> {
    private pensionDetailList: PensionDetailResponse[] = [];
    public get pensionDetails(): PensionDetailResponse[] {
        return this.pensionDetailList;
    }
    public set pensionDetails(v: PensionDetailResponse[]) {
        this.pensionDetailList = v;
        this.currentPageSize = this.pensionDetailList.length;
    }
}
export class PensionDetailResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public category: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
