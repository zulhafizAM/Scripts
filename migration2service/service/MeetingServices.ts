import BaseService from 'App/Services/BaseService';
import Meeting from 'App/Models/Meeting';

export default class MeetingServices extends BaseService {
    public async getMeetings({ page = 1, perPage = 10 }) {
        return this.getDataList(Meeting, { page, perPage });
    }

    public async getMeeting(meetingId: number) {
        const readMeeting = await Meeting.query()
            .where('active', true)
            .where('id', meetingId)
            .preload('meetingType', (query) => query.where('active', true))
            .preload('position', (query) => query.where('active', true))
            .preload('grade', (query) => query.where('active', true))
            .preload('candidates', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('selfRequests', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('forceTransferByDirectors', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('gradeActingTypes', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('gradeActingPostponeProcesses', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('mainGradeActingPromotions', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('gradePromotionTypes', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('serviceConfirmations', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('newOffers', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('surcharges', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('integrityProceedings', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('appealApplications', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('halfPayLeaves', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('withoutPayLeaves', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('salaryMovements', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('contractLifeCycles', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readMeeting;
    }

    public async addMeeting(payload) {
        return this.createData(Meeting, payload, 'Admin');
    }

    public async editMeeting(id: number, payload) {
        return this.updateData(Meeting, id, payload, 'Admin');
    }
}
