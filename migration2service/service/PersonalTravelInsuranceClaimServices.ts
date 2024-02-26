import BaseService from 'App/Services/BaseService';
import PersonalTravelInsuranceClaim from 'App/Models/PersonalTravelInsuranceClaim';

export default class PersonalTravelInsuranceClaimServices extends BaseService {
    public async getPersonalTravelInsuranceClaims({ page = 1, perPage = 10 }) {
        return this.getDataList(PersonalTravelInsuranceClaim, { page, perPage });
    }

    public async getPersonalTravelInsuranceClaim(personalTravelInsuranceClaimId: number) {
        const readPersonalTravelInsuranceClaim = await PersonalTravelInsuranceClaim.query()
            .where('active', true)
            .where('id', personalTravelInsuranceClaimId)
            .preload('allowance', (query) => query.where('active', true))
            .preload('personalInsuranceProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readPersonalTravelInsuranceClaim;
    }

    public async addPersonalTravelInsuranceClaim(payload) {
        return this.createData(PersonalTravelInsuranceClaim, payload, 'Admin');
    }

    public async editPersonalTravelInsuranceClaim(id: number, payload) {
        return this.updateData(PersonalTravelInsuranceClaim, id, payload, 'Admin');
    }
}
