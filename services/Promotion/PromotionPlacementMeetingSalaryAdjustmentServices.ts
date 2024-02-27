import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PromotionPlacementMeetingSalaryAdjustmentServices {
    public async getPlacementMeetingSalaryAdjustments(
        payload,
    ): Promise<DefaultListResponse<PromotionPlacementMeetingSalaryAdjustmentsResponse>> {
        let placementMeetingSalaryAdjustments = new DefaultListResponse<PromotionPlacementMeetingSalaryAdjustmentsResponse>();
        const placementMeetingSalaryAdjustmentList = await PlacementMeetingSalaryAdjustment.query()
        placementMeetingSalaryAdjustments = {
            meta: {
                pageNum: payload.pageNum,
                totalData: placementMeetingSalaryAdjustmentList.length,
                totalPage: Math.ceil(placementMeetingSalaryAdjustmentList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: placementMeetingSalaryAdjustmentList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<PromotionPlacementMeetingSalaryAdjustmentsResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, placementMeetingSalaryAdjustments, 'dataList');
        }

        placementMeetingSalaryAdjustments.dataList = placementMeetingSalaryAdjustments.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        placementMeetingSalaryAdjustments.meta!.pageSize = placementMeetingSalaryAdjustments.dataList.length;
        return placementMeetingSalaryAdjustments;
    }
    public async getPlacementMeetingSalaryAdjustment(
        payload,
    ): Promise<DefaultDataResponse<PromotionPlacementMeetingSalaryAdjustmentResponse>> {
        let placementMeetingSalaryAdjustment = new DefaultDataResponse<PromotionPlacementMeetingSalaryAdjustmentResponse>();
        const readPlacementMeetingSalaryAdjustment = await PlacementMeetingSalaryAdjustment.query()
            .where('id', payload.id)
            .firstOrFail();
        placementMeetingSalaryAdjustment = {
            details: {
                id: Number(readPlacementMeetingSalaryAdjustment.id),
            },
        } as DefaultDataResponse<PromotionPlacementMeetingSalaryAdjustmentResponse>;
        return placementMeetingSalaryAdjustment;
    }
}
