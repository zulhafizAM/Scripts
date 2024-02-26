import { DateTime } from 'luxon';

export default class GetMeetingTypeResponse {
    public meetingType: MeetingTypeResponse =
        new MeetingTypeResponse();
}
export class MeetingTypeResponse {
    public name: string = '';

    public getFull(data) {
        this.name = data.name;
    }
}