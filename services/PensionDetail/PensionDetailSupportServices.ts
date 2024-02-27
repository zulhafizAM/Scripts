import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PensionDetailSupportServices {
    public async getSupports(
        payload,
    ): Promise<DefaultListResponse<PensionDetailSupportsResponse>> {
        let supports = new DefaultListResponse<PensionDetailSupportsResponse>();
        const supportList = await Support.query()
        supports = {
            meta: {
                pageNum: payload.pageNum,
                totalData: supportList.length,
                totalPage: Math.ceil(supportList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: supportList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<PensionDetailSupportsResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, supports, 'dataList');
        }

        supports.dataList = supports.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        supports.meta!.pageSize = supports.dataList.length;
        return supports;
    }
    public async editSupport(
        payload,
    ): Promise<DefaultDataResponse<PensionDetailSupportResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<PensionDetailSupportResponse>();
            const support = await Support.query()
                .where('id', payload.id)
                .firstOrFail();

            await support.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(support.id),
                },
            } as DefaultDataResponse<PensionDetailSupportResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
