import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PromotionTbk12Services {
    public async getTbk12s(
        payload,
    ): Promise<DefaultListResponse<PromotionTbk12sResponse>> {
        let tbk12s = new DefaultListResponse<PromotionTbk12sResponse>();
        const tbk12List = await Tbk12.query()
        tbk12s = {
            meta: {
                pageNum: payload.pageNum,
                totalData: tbk12List.length,
                totalPage: Math.ceil(tbk12List.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: tbk12List.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<PromotionTbk12sResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, tbk12s, 'dataList');
        }

        tbk12s.dataList = tbk12s.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        tbk12s.meta!.pageSize = tbk12s.dataList.length;
        return tbk12s;
    }
}
