import BaseService from 'App/Services/BaseService';
import MedicalClaim from 'App/Models/MedicalClaim';

export default class MedicalClaimServices extends BaseService {
    public async getMedicalClaims({ page = 1, perPage = 10 }) {
        return this.getDataList(MedicalClaim, { page, perPage });
    }

    public async getMedicalClaim(medicalClaimId: number) {
        const readMedicalClaim = await MedicalClaim.query()
            .where('active', true)
            .where('id', medicalClaimId)
            .preload('employeeMedicalAlloc', (query) => query.where('active', true))
            .preload('clinic', (query) => query.where('active', true))
            .preload('medicalClaimProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readMedicalClaim;
    }

    public async addMedicalClaim(payload) {
        return this.createData(MedicalClaim, payload, 'Admin');
    }

    public async editMedicalClaim(id: number, payload) {
        return this.updateData(MedicalClaim, id, payload, 'Admin');
    }
}
