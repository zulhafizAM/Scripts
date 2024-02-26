import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingPostponeResultServices {
    public async getPostponeResults(
        payload,
    ): Promise<DefaultListResponse<ActingPostponeResultsResponse>> {
        let postponeResults = new DefaultListResponse<ActingPostponeResultsResponse>();
        const postponeResultList = await PostponeResult.query()
        postponeResults = {
            meta: {
                pageNum: payload.pageNum,
                totalData: postponeResultList.length,
                totalPage: Math.ceil(postponeResultList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: postponeResultList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<ActingPostponeResultsResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, postponeResults, 'dataList');
        }

        postponeResults.dataList = postponeResults.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        postponeResults.meta!.pageSize = postponeResults.dataList.length;
        return postponeResults;
    }
}
