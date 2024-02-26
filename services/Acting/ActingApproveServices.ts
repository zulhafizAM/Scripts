import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingApproveServices {
    public async editApprove(
        payload,
    ): Promise<DefaultDataResponse<ActingApproveResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<ActingApproveResponse>();
            const approve = await Approve.query()
                .where('id', payload.id)
                .firstOrFail();

            await approve.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(approve.id),
                },
            } as DefaultDataResponse<ActingApproveResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
