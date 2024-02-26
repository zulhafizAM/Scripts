import BaseService from 'App/Services/BaseService';
import AnnualMedicalAllocation from 'App/Models/AnnualMedicalAllocation';

export default class AnnualMedicalAllocationServices extends BaseService {
    public async getAnnualMedicalAllocations({ page = 1, perPage = 10 }) {
        return this.getDataList(AnnualMedicalAllocation, { page, perPage });
    }

    public async getAnnualMedicalAllocation(annualMedicalAllocationId: number) {
        const readAnnualMedicalAllocation = await AnnualMedicalAllocation.query()
            .where('active', true)
            .where('id', annualMedicalAllocationId)
            .preload('employee', (query) => query.where('active', true))
            .preload('medicalClaims', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readAnnualMedicalAllocation;
    }

    public async addAnnualMedicalAllocation(payload) {
        return this.createData(AnnualMedicalAllocation, payload, 'Admin');
    }

    public async editAnnualMedicalAllocation(id: number, payload) {
        return this.updateData(AnnualMedicalAllocation, id, payload, 'Admin');
    }
}
