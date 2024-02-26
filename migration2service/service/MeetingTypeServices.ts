import BaseService from 'App/Services/BaseService';
import MeetingType from 'App/Models/MeetingType';

export default class MeetingTypeServices extends BaseService {
    public async getMeetingTypes({ page = 1, perPage = 10 }) {
        return this.getDataList(MeetingType, { page, perPage });
    }

    public async getMeetingType(meetingTypeId: number) {
        const readMeetingType = await MeetingType.query()
            .where('active', true)
            .where('id', meetingTypeId)
            .preload('meetings', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readMeetingType;
    }

    public async addMeetingType(payload) {
        return this.createData(MeetingType, payload, 'Admin');
    }

    public async editMeetingType(id: number, payload) {
        return this.updateData(MeetingType, id, payload, 'Admin');
    }
}
