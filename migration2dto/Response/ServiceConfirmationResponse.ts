import { DateTime } from 'luxon';

export default class GetServiceConfirmationResponse {
    public serviceConfirmation: ServiceConfirmationResponse =
        new ServiceConfirmationResponse();
}
export class ServiceConfirmationResponse {
    public employeeId: bigint;
    public meetingId: bigint;
    public isCompleted: boolean;
    public isNewGrade: boolean;
    public meetingResult: string = '';
    public status: string = '';
    public remark: string = '';

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.meetingId = data.meetingId;
        this.isCompleted = data.isCompleted;
        this.isNewGrade = data.isNewGrade;
        this.meetingResult = data.meetingResult;
        this.status = data.status;
        this.remark = data.remark;
    }
}