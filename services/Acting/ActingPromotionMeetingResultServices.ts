import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingPromotionMeetingResultServices {
    public async getPromotionMeetingResults(
        payload,
    ): Promise<DefaultListResponse<ActingPromotionMeetingResultsResponse>> {
        let promotionMeetingResults = new DefaultListResponse<ActingPromotionMeetingResultsResponse>();
        const promotionMeetingResultList = await PromotionMeetingResult.query()
        promotionMeetingResults = {
            meta: {
                pageNum: payload.pageNum,
                totalData: promotionMeetingResultList.length,
                totalPage: Math.ceil(promotionMeetingResultList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: promotionMeetingResultList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<ActingPromotionMeetingResultsResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, promotionMeetingResults, 'dataList');
        }

        promotionMeetingResults.dataList = promotionMeetingResults.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        promotionMeetingResults.meta!.pageSize = promotionMeetingResults.dataList.length;
        return promotionMeetingResults;
    }
    public async addPromotionMeetingResult(
        payload,
    ): Promise<DefaultDataResponse<ActingPromotionMeetingResultResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<ActingPromotionMeetingResultResponse>();
            let promotionMeetingResult = new PromotionMeetingResult();

            await promotionMeetingResult.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(promotionMeetingResult.id),
                },
            } as DefaultDataResponse<ActingPromotionMeetingResultResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
    public async editPromotionMeetingResult(
        payload,
    ): Promise<DefaultDataResponse<ActingPromotionMeetingResultResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<ActingPromotionMeetingResultResponse>();
            const promotionMeetingResult = await PromotionMeetingResult.query()
                .where('id', payload.id)
                .firstOrFail();

            await promotionMeetingResult.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(promotionMeetingResult.id),
                },
            } as DefaultDataResponse<ActingPromotionMeetingResultResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
