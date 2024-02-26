import { DateTime } from 'luxon';

export default class GetVehicleLoanResponse {
    public vehicleLoan: VehicleLoanResponse =
        new VehicleLoanResponse();
}
export class VehicleLoanResponse {
    public loanId: bigint;
    public maxLoanEligibility: number;
    public requestedAmount: number;
    public startLoanDate: DateTime;
    public nettPrice: number;
    public paymentPeriod: number;
    public reason: string = '';
    public document: Blob;
    public vehicleCondition: string = '';
    public vehicleType: string = '';
    public vehicleBrandModel: string = '';
    public vehicleDetails: string = '';
    public registrationNumber: string = '';
    public registrationDate: DateTime;

    public getFull(data) {
        this.loanId = data.loanId;
        this.maxLoanEligibility = data.maxLoanEligibility;
        this.requestedAmount = data.requestedAmount;
        this.startLoanDate = data.startLoanDate;
        this.nettPrice = data.nettPrice;
        this.paymentPeriod = data.paymentPeriod;
        this.reason = data.reason;
        this.document = data.document;
        this.vehicleCondition = data.vehicleCondition;
        this.vehicleType = data.vehicleType;
        this.vehicleBrandModel = data.vehicleBrandModel;
        this.vehicleDetails = data.vehicleDetails;
        this.registrationNumber = data.registrationNumber;
        this.registrationDate = data.registrationDate;
    }
}