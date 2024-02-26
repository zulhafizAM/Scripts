import BaseService from 'App/Services/BaseService';
import IntegrityProceeding from 'App/Models/IntegrityProceeding';

export default class IntegrityProceedingServices extends BaseService {
    public async getIntegrityProceedings({ page = 1, perPage = 10 }) {
        return this.getDataList(IntegrityProceeding, { page, perPage });
    }

    public async getIntegrityProceeding(integrityProceedingId: number) {
        const readIntegrityProceeding = await IntegrityProceeding.query()
            .where('active', true)
            .where('id', integrityProceedingId)
            .preload('employee', (query) => query.where('active', true))
            .preload('meeting', (query) => query.where('active', true))
            .preload('disciplinaryType', (query) => query.where('active', true))
            .preload('accussations', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('sentencings', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('onSuspensionOrDismissals', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('cancelSuspensionOrDismissals', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readIntegrityProceeding;
    }

    public async addIntegrityProceeding(payload) {
        return this.createData(IntegrityProceeding, payload, 'Admin');
    }

    public async editIntegrityProceeding(id: number, payload) {
        return this.updateData(IntegrityProceeding, id, payload, 'Admin');
    }
}
