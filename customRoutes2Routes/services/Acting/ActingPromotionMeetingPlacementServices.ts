import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingPromotionMeetingPlacementServices {
    public async addPromotionMeetingPlacement(
        payload,
    ): Promise<DefaultDataResponse<ActingPromotionMeetingPlacementResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<ActingPromotionMeetingPlacementResponse>();
            let promotionMeetingPlacement = new PromotionMeetingPlacement();

            await promotionMeetingPlacement.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(promotionMeetingPlacement.id),
                },
            } as DefaultDataResponse<ActingPromotionMeetingPlacementResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
    public async editPromotionMeetingPlacement(
        payload,
    ): Promise<DefaultDataResponse<ActingPromotionMeetingPlacementResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<ActingPromotionMeetingPlacementResponse>();
            const promotionMeetingPlacement = await PromotionMeetingPlacement.query()
                .where('id', payload.id)
                .firstOrFail();

            await promotionMeetingPlacement.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(promotionMeetingPlacement.id),
                },
            } as DefaultDataResponse<ActingPromotionMeetingPlacementResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
