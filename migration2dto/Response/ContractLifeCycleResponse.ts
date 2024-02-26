import { DateTime } from 'luxon';

export default class GetContractLifeCycleResponse {
    public contractLifeCycle: ContractLifeCycleResponse =
        new ContractLifeCycleResponse();
}
export class ContractLifeCycleResponse {
    public contractId: bigint;
    public meetingId: bigint;
    public workPerformanceRating: number;
    public individualMark: number;
    public overallMark: number;
    public meetingResult: string = '';
    public meetingRemark: string = '';
    public meetingResultDate: DateTime;
    public document: Blob;
    public status: string = '';
    public remark: string = '';

    public getFull(data) {
        this.contractId = data.contractId;
        this.meetingId = data.meetingId;
        this.workPerformanceRating = data.workPerformanceRating;
        this.individualMark = data.individualMark;
        this.overallMark = data.overallMark;
        this.meetingResult = data.meetingResult;
        this.meetingRemark = data.meetingRemark;
        this.meetingResultDate = data.meetingResultDate;
        this.document = data.document;
        this.status = data.status;
        this.remark = data.remark;
    }
}