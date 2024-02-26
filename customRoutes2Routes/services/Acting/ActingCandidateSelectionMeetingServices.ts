import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingCandidateSelectionMeetingServices {
    public async editCandidateSelectionMeeting(
        payload,
    ): Promise<DefaultDataResponse<ActingCandidateSelectionMeetingResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<ActingCandidateSelectionMeetingResponse>();
            const candidateSelectionMeeting = await CandidateSelectionMeeting.query()
                .where('id', payload.id)
                .firstOrFail();

            await candidateSelectionMeeting.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(candidateSelectionMeeting.id),
                },
            } as DefaultDataResponse<ActingCandidateSelectionMeetingResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
