import BaseService from 'App/Services/BaseService';
import Clinic from 'App/Models/Clinic';

export default class ClinicServices extends BaseService {
    public async getClinics({ page = 1, perPage = 10 }) {
        return this.getDataList(Clinic, { page, perPage });
    }

    public async getClinic(clinicId: number) {
        const readClinic = await Clinic.query()
            .where('active', true)
            .where('id', clinicId)
            .preload('district', (query) => query.where('active', true))
            .preload('clinicApproveProcess', (query) => query.where('active', true))
            .preload('permission', (query) => query.where('active', true))
            .preload('medicalClaims', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('clinicClaims', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('districts', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readClinic;
    }

    public async addClinic(payload) {
        return this.createData(Clinic, payload, 'Admin');
    }

    public async editClinic(id: number, payload) {
        return this.updateData(Clinic, id, payload, 'Admin');
    }
}
