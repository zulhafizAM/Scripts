import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PromotionApproveServices {
    public async editApprove(
        payload,
    ): Promise<DefaultDataResponse<PromotionApproveResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<PromotionApproveResponse>();
            const approve = await Approve.query()
                .where('id', payload.id)
                .firstOrFail();

            await approve.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(approve.id),
                },
            } as DefaultDataResponse<PromotionApproveResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
