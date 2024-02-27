import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PensionDetailServiceServices {
    public async getService(
        payload,
    ): Promise<DefaultDataResponse<PensionDetailServiceResponse>> {
        let service = new DefaultDataResponse<PensionDetailServiceResponse>();
        const readService = await Service.query()
            .where('id', payload.id)
            .firstOrFail();
        service = {
            details: {
                id: Number(readService.id),
            },
        } as DefaultDataResponse<PensionDetailServiceResponse>;
        return service;
    }
}
