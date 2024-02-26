import { DateTime } from 'luxon';

export default class GetLoanResponse {
    public loan: LoanResponse =
        new LoanResponse();
}
export class LoanResponse {
    public deductionId: bigint;
    public loanType: string = '';
    public applicationDate: DateTime;
    public status: string = '';
    public remark: string = '';

    public getFull(data) {
        this.deductionId = data.deductionId;
        this.loanType = data.loanType;
        this.applicationDate = data.applicationDate;
        this.status = data.status;
        this.remark = data.remark;
    }
}