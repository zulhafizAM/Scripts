import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PensionDetailApproveServices {
    public async getApproves(
        payload,
    ): Promise<DefaultListResponse<PensionDetailApprovesResponse>> {
        let approves = new DefaultListResponse<PensionDetailApprovesResponse>();
        const approveList = await Approve.query()
        approves = {
            meta: {
                pageNum: payload.pageNum,
                totalData: approveList.length,
                totalPage: Math.ceil(approveList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: approveList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<PensionDetailApprovesResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, approves, 'dataList');
        }

        approves.dataList = approves.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        approves.meta!.pageSize = approves.dataList.length;
        return approves;
    }
    public async editApprove(
        payload,
    ): Promise<DefaultDataResponse<PensionDetailApproveResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<PensionDetailApproveResponse>();
            const approve = await Approve.query()
                .where('id', payload.id)
                .firstOrFail();

            await approve.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(approve.id),
                },
            } as DefaultDataResponse<PensionDetailApproveResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
