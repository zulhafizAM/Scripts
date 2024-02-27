import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PromotionSupportServices {
    public async editSupport(
        payload,
    ): Promise<DefaultDataResponse<PromotionSupportResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<PromotionSupportResponse>();
            const support = await Support.query()
                .where('id', payload.id)
                .firstOrFail();

            await support.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(support.id),
                },
            } as DefaultDataResponse<PromotionSupportResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
