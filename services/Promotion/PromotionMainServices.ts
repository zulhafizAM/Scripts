import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PromotionMainServices {
    public async getMains(
        payload,
    ): Promise<DefaultListResponse<PromotionMainsResponse>> {
        let mains = new DefaultListResponse<PromotionMainsResponse>();
        const mainList = await Main.query()
        mains = {
            meta: {
                pageNum: payload.pageNum,
                totalData: mainList.length,
                totalPage: Math.ceil(mainList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: mainList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<PromotionMainsResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, mains, 'dataList');
        }

        mains.dataList = mains.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        mains.meta!.pageSize = mains.dataList.length;
        return mains;
    }
}
