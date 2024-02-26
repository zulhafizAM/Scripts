import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class ActingDirectorCertifyServices {
    public async getDirectorCertify(
        payload,
    ): Promise<DefaultDataResponse<ActingDirectorCertifyResponse>> {
        let directorCertify = new DefaultDataResponse<ActingDirectorCertifyResponse>();
        const readDirectorCertify = await DirectorCertify.query()
            .where('id', payload.id)
            .firstOrFail();
        directorCertify = {
            details: {
                id: Number(readDirectorCertify.id),
            },
        } as DefaultDataResponse<ActingDirectorCertifyResponse>;
        return directorCertify;
    }
    public async editDirectorCertify(
        payload,
    ): Promise<DefaultDataResponse<ActingDirectorCertifyResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<ActingDirectorCertifyResponse>();
            const directorCertify = await DirectorCertify.query()
                .where('id', payload.id)
                .firstOrFail();

            await directorCertify.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(directorCertify.id),
                },
            } as DefaultDataResponse<ActingDirectorCertifyResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
