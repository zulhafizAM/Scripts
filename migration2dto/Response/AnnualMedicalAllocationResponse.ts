import { DateTime } from 'luxon';

export default class GetAnnualMedicalAllocationResponse {
    public annualMedicalAllocation: AnnualMedicalAllocationResponse =
        new AnnualMedicalAllocationResponse();
}
export class AnnualMedicalAllocationResponse {
    public employeeId: bigint;
    public month: number;
    public year: number;
    public allocatedAmount: number;
    public totalClaimed: number;

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.month = data.month;
        this.year = data.year;
        this.allocatedAmount = data.allocatedAmount;
        this.totalClaimed = data.totalClaimed;
    }
}