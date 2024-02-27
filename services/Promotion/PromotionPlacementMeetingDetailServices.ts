import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PromotionPlacementMeetingDetailServices {
    public async getPlacementMeetingDetail(
        payload,
    ): Promise<DefaultDataResponse<PromotionPlacementMeetingDetailResponse>> {
        let placementMeetingDetail = new DefaultDataResponse<PromotionPlacementMeetingDetailResponse>();
        const readPlacementMeetingDetail = await PlacementMeetingDetail.query()
            .where('id', payload.id)
            .firstOrFail();
        placementMeetingDetail = {
            details: {
                id: Number(readPlacementMeetingDetail.id),
            },
        } as DefaultDataResponse<PromotionPlacementMeetingDetailResponse>;
        return placementMeetingDetail;
    }
    public async editPlacementMeetingDetail(
        payload,
    ): Promise<DefaultDataResponse<PromotionPlacementMeetingDetailResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<PromotionPlacementMeetingDetailResponse>();
            const placementMeetingDetail = await PlacementMeetingDetail.query()
                .where('id', payload.id)
                .firstOrFail();

            await placementMeetingDetail.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(placementMeetingDetail.id),
                },
            } as DefaultDataResponse<PromotionPlacementMeetingDetailResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
