import { DateTime } from 'luxon';

export default class GetQuarterResponse {
    public quarter: QuarterResponse =
        new QuarterResponse();
}
export class QuarterResponse {
    public deductionId: bigint;
    public applicationType: string = '';
    public isOccupied: boolean;
    public movingInDate: DateTime;
    public movingOutDate: DateTime;
    public rentRate: number;
    public quarterDetails: string = '';

    public getFull(data) {
        this.deductionId = data.deductionId;
        this.applicationType = data.applicationType;
        this.isOccupied = data.isOccupied;
        this.movingInDate = data.movingInDate;
        this.movingOutDate = data.movingOutDate;
        this.rentRate = data.rentRate;
        this.quarterDetails = data.quarterDetails;
    }
}