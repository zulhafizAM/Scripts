import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PensionDetailPersonalDetailServices {
    public async getPersonalDetail(
        payload,
    ): Promise<DefaultDataResponse<PensionDetailPersonalDetailResponse>> {
        let personalDetail = new DefaultDataResponse<PensionDetailPersonalDetailResponse>();
        const readPersonalDetail = await PersonalDetail.query()
            .where('id', payload.id)
            .firstOrFail();
        personalDetail = {
            details: {
                id: Number(readPersonalDetail.id),
            },
        } as DefaultDataResponse<PensionDetailPersonalDetailResponse>;
        return personalDetail;
    }
}
