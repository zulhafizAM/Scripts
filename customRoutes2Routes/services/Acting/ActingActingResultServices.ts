import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingActingResultServices {
    public async editActingResult(
        payload,
    ): Promise<DefaultDataResponse<ActingActingResultResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<ActingActingResultResponse>();
            const actingResult = await ActingResult.query()
                .where('id', payload.id)
                .firstOrFail();

            await actingResult.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(actingResult.id),
                },
            } as DefaultDataResponse<ActingActingResultResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
