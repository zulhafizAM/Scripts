import { DateTime } from 'luxon';

export default class GetIntegrityProceedingResponse {
    public integrityProceeding: IntegrityProceedingResponse =
        new IntegrityProceedingResponse();
}
export class IntegrityProceedingResponse {
    public employeeId: bigint;
    public meetingId: bigint;
    public disciplinaryTypeId: bigint;
    public meetingResult: string = '';
    public remark: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.meetingId = data.meetingId;
        this.disciplinaryTypeId = data.disciplinaryTypeId;
        this.meetingResult = data.meetingResult;
        this.remark = data.remark;
    }
}