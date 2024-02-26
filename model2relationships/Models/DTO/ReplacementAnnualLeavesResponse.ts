import { DateTime } from 'luxon';
import { BaseResponse } from './BaseResponse';

export default class ReplacementAnnualLeavesResponse extends BaseResponse<ReplacementAnnualLeaveResponse> {
    private replacementAnnualLeaveList: ReplacementAnnualLeaveResponse[] = [];
    public get replacementAnnualLeaves(): ReplacementAnnualLeaveResponse[] {
        return this.replacementAnnualLeaveList;
    }
    public set replacementAnnualLeaves(v: ReplacementAnnualLeaveResponse[]) {
        this.replacementAnnualLeaveList = v;
        this.currentPageSize = this.replacementAnnualLeaveList.length;
    }
}

class ReplacementAnnualLeaveResponse {
    public employeeName: string;
    public identityCardNo: string;
    public totalAnnualLeave: number;
    public remainderAnnualLeave: number;
    public collectedAmount: number;
    public applicationDate: DateTime;
    public verificationDate: DateTime;
    public status: string;
}
