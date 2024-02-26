import { DateTime } from 'luxon';

export default class GetComputerLoanResponse {
    public computerLoan: ComputerLoanResponse =
        new ComputerLoanResponse();
}
export class ComputerLoanResponse {
    public loanId: bigint;
    public requestedAmount: number;
    public startLoanDate: DateTime;
    public paymentPeriod: number;
    public document: Blob;

    public getFull(data) {
        this.loanId = data.loanId;
        this.requestedAmount = data.requestedAmount;
        this.startLoanDate = data.startLoanDate;
        this.paymentPeriod = data.paymentPeriod;
        this.document = data.document;
    }
}