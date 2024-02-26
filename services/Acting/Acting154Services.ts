import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class Acting154Services {
    public async get154s(
        payload,
    ): Promise<DefaultListResponse<Acting154sResponse>> {
        let 154s = new DefaultListResponse<Acting154sResponse>();
        const 154List = await 154.query()
        154s = {
            meta: {
                pageNum: payload.pageNum,
                totalData: 154List.length,
                totalPage: Math.ceil(154List.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: 154List.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<Acting154sResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, 154s, 'dataList');
        }

        154s.dataList = 154s.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        154s.meta!.pageSize = 154s.dataList.length;
        return 154s;
    }
}
