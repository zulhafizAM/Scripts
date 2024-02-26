import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingActingConfirmationServices {
    public async getActingConfirmations(
        payload,
    ): Promise<DefaultListResponse<ActingActingConfirmationsResponse>> {
        let actingConfirmations = new DefaultListResponse<ActingActingConfirmationsResponse>();
        const actingConfirmationList = await ActingConfirmation.query()
        actingConfirmations = {
            meta: {
                pageNum: payload.pageNum,
                totalData: actingConfirmationList.length,
                totalPage: Math.ceil(actingConfirmationList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: actingConfirmationList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<ActingActingConfirmationsResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, actingConfirmations, 'dataList');
        }

        actingConfirmations.dataList = actingConfirmations.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        actingConfirmations.meta!.pageSize = actingConfirmations.dataList.length;
        return actingConfirmations;
    }
    public async getActingConfirmation(
        payload,
    ): Promise<DefaultDataResponse<ActingActingConfirmationResponse>> {
        let actingConfirmation = new DefaultDataResponse<ActingActingConfirmationResponse>();
        const readActingConfirmation = await ActingConfirmation.query()
            .where('id', payload.id)
            .firstOrFail();
        actingConfirmation = {
            details: {
                id: Number(readActingConfirmation.id),
            },
        } as DefaultDataResponse<ActingActingConfirmationResponse>;
        return actingConfirmation;
    }
}
