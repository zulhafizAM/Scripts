import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PromotionPlacementMeetingServices {
    public async getPlacementMeetings(
        payload,
    ): Promise<DefaultListResponse<PromotionPlacementMeetingsResponse>> {
        let placementMeetings = new DefaultListResponse<PromotionPlacementMeetingsResponse>();
        const placementMeetingList = await PlacementMeeting.query()
        placementMeetings = {
            meta: {
                pageNum: payload.pageNum,
                totalData: placementMeetingList.length,
                totalPage: Math.ceil(placementMeetingList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: placementMeetingList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<PromotionPlacementMeetingsResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, placementMeetings, 'dataList');
        }

        placementMeetings.dataList = placementMeetings.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        placementMeetings.meta!.pageSize = placementMeetings.dataList.length;
        return placementMeetings;
    }
}
