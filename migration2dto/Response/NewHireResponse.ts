import { DateTime } from 'luxon';

export default class GetNewHireResponse {
    public newHire: NewHireResponse =
        new NewHireResponse();
}
export class NewHireResponse {
    public employeeId: bigint;
    public candidateId: bigint;
    public isFitCriteria: boolean;
    public remark: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.candidateId = data.candidateId;
        this.isFitCriteria = data.isFitCriteria;
        this.remark = data.remark;
    }
}