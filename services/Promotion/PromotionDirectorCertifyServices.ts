import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PromotionDirectorCertifyServices {
    public async getDirectorCertify(
        payload,
    ): Promise<DefaultDataResponse<PromotionDirectorCertifyResponse>> {
        let directorCertify = new DefaultDataResponse<PromotionDirectorCertifyResponse>();
        const readDirectorCertify = await DirectorCertify.query()
            .where('id', payload.id)
            .firstOrFail();
        directorCertify = {
            details: {
                id: Number(readDirectorCertify.id),
            },
        } as DefaultDataResponse<PromotionDirectorCertifyResponse>;
        return directorCertify;
    }
    public async editDirectorCertify(
        payload,
    ): Promise<DefaultDataResponse<PromotionDirectorCertifyResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<PromotionDirectorCertifyResponse>();
            const directorCertify = await DirectorCertify.query()
                .where('id', payload.id)
                .firstOrFail();

            await directorCertify.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(directorCertify.id),
                },
            } as DefaultDataResponse<PromotionDirectorCertifyResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
