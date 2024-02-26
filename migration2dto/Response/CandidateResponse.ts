import { DateTime } from 'luxon';

export default class GetCandidateResponse {
    public candidate: CandidateResponse =
        new CandidateResponse();
}
export class CandidateResponse {
    public personalDetailId: bigint;
    public candidateTypeId: bigint;
    public employeeId: bigint;
    public candidateNumber: string = '';
    public category: string = '';
    public link: string = '';
    public applicationDate: DateTime;
    public status: string = '';
    public remark: string = '';

    public getFull(data) {
        this.personalDetailId = data.personalDetailId;
        this.candidateTypeId = data.candidateTypeId;
        this.employeeId = data.employeeId;
        this.candidateNumber = data.candidateNumber;
        this.category = data.category;
        this.link = data.link;
        this.applicationDate = data.applicationDate;
        this.status = data.status;
        this.remark = data.remark;
    }
}