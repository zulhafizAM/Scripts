import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingFlexi41Services {
    public async getFlexi41s(
        payload,
    ): Promise<DefaultListResponse<ActingFlexi41sResponse>> {
        let flexi41s = new DefaultListResponse<ActingFlexi41sResponse>();
        const flexi41List = await Flexi41.query()
        flexi41s = {
            meta: {
                pageNum: payload.pageNum,
                totalData: flexi41List.length,
                totalPage: Math.ceil(flexi41List.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: flexi41List.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<ActingFlexi41sResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, flexi41s, 'dataList');
        }

        flexi41s.dataList = flexi41s.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        flexi41s.meta!.pageSize = flexi41s.dataList.length;
        return flexi41s;
    }
}
