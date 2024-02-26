import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingPromotionMeetingPlacementDetailServices {
    public async editPromotionMeetingPlacementDetail(
        payload,
    ): Promise<DefaultDataResponse<ActingPromotionMeetingPlacementDetailResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<ActingPromotionMeetingPlacementDetailResponse>();
            const promotionMeetingPlacementDetail = await PromotionMeetingPlacementDetail.query()
                .where('id', payload.id)
                .firstOrFail();

            await promotionMeetingPlacementDetail.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(promotionMeetingPlacementDetail.id),
                },
            } as DefaultDataResponse<ActingPromotionMeetingPlacementDetailResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
