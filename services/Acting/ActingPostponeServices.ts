import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingPostponeServices {
    public async getPostpones(
        payload,
    ): Promise<DefaultListResponse<ActingPostponesResponse>> {
        let postpones = new DefaultListResponse<ActingPostponesResponse>();
        const postponeList = await Postpone.query()
        postpones = {
            meta: {
                pageNum: payload.pageNum,
                totalData: postponeList.length,
                totalPage: Math.ceil(postponeList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: postponeList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<ActingPostponesResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, postpones, 'dataList');
        }

        postpones.dataList = postpones.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        postpones.meta!.pageSize = postpones.dataList.length;
        return postpones;
    }
    public async getPostpone(
        payload,
    ): Promise<DefaultDataResponse<ActingPostponeResponse>> {
        let postpone = new DefaultDataResponse<ActingPostponeResponse>();
        const readPostpone = await Postpone.query()
            .where('id', payload.id)
            .firstOrFail();
        postpone = {
            details: {
                id: Number(readPostpone.id),
            },
        } as DefaultDataResponse<ActingPostponeResponse>;
        return postpone;
    }
    public async editPostpone(
        payload,
    ): Promise<DefaultDataResponse<ActingPostponeResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<ActingPostponeResponse>();
            const postpone = await Postpone.query()
                .where('id', payload.id)
                .firstOrFail();

            await postpone.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(postpone.id),
                },
            } as DefaultDataResponse<ActingPostponeResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
