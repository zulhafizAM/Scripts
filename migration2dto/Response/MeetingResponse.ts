import { DateTime } from 'luxon';

export default class GetMeetingResponse {
    public meeting: MeetingResponse =
        new MeetingResponse();
}
export class MeetingResponse {
    public meetingTypeId: bigint;
    public positionId: bigint;
    public gradeId: bigint;
    public groupName: string = '';
    public meetingCount: number;
    public employeeCount: number;
    public meetingDate: DateTime;
    public status: string = '';

    public getFull(data) {
        this.meetingTypeId = data.meetingTypeId;
        this.positionId = data.positionId;
        this.gradeId = data.gradeId;
        this.groupName = data.groupName;
        this.meetingCount = data.meetingCount;
        this.employeeCount = data.employeeCount;
        this.meetingDate = data.meetingDate;
        this.status = data.status;
    }
}