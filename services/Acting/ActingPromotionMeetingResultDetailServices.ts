import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingPromotionMeetingResultDetailServices {
    public async getPromotionMeetingResultDetail(
        payload,
    ): Promise<DefaultDataResponse<ActingPromotionMeetingResultDetailResponse>> {
        let promotionMeetingResultDetail = new DefaultDataResponse<ActingPromotionMeetingResultDetailResponse>();
        const readPromotionMeetingResultDetail = await PromotionMeetingResultDetail.query()
            .where('id', payload.id)
            .firstOrFail();
        promotionMeetingResultDetail = {
            details: {
                id: Number(readPromotionMeetingResultDetail.id),
            },
        } as DefaultDataResponse<ActingPromotionMeetingResultDetailResponse>;
        return promotionMeetingResultDetail;
    }
    public async editPromotionMeetingResultDetail(
        payload,
    ): Promise<DefaultDataResponse<ActingPromotionMeetingResultDetailResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<ActingPromotionMeetingResultDetailResponse>();
            const promotionMeetingResultDetail = await PromotionMeetingResultDetail.query()
                .where('id', payload.id)
                .firstOrFail();

            await promotionMeetingResultDetail.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(promotionMeetingResultDetail.id),
                },
            } as DefaultDataResponse<ActingPromotionMeetingResultDetailResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
