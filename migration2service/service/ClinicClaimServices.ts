import BaseService from 'App/Services/BaseService';
import ClinicClaim from 'App/Models/ClinicClaim';

export default class ClinicClaimServices extends BaseService {
    public async getClinicClaims({ page = 1, perPage = 10 }) {
        return this.getDataList(ClinicClaim, { page, perPage });
    }

    public async getClinicClaim(clinicClaimId: number) {
        const readClinicClaim = await ClinicClaim.query()
            .where('active', true)
            .where('id', clinicClaimId)
            .preload('clinic', (query) => query.where('active', true))
            .preload('clinicClaimProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readClinicClaim;
    }

    public async addClinicClaim(payload) {
        return this.createData(ClinicClaim, payload, 'Admin');
    }

    public async editClinicClaim(id: number, payload) {
        return this.updateData(ClinicClaim, id, payload, 'Admin');
    }
}
