import BaseService from 'App/Services/BaseService';
import EducationFundReimbursement from 'App/Models/EducationFundReimbursement';

export default class EducationFundReimbursementServices extends BaseService {
    public async getEducationFundReimbursements({ page = 1, perPage = 10 }) {
        return this.getDataList(EducationFundReimbursement, { page, perPage });
    }

    public async getEducationFundReimbursement(educationFundReimbursementId: number) {
        const readEducationFundReimbursement = await EducationFundReimbursement.query()
            .where('active', true)
            .where('id', educationFundReimbursementId)
            .preload('employee', (query) => query.where('active', true))
            .preload('fundReimbursementProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readEducationFundReimbursement;
    }

    public async addEducationFundReimbursement(payload) {
        return this.createData(EducationFundReimbursement, payload, 'Admin');
    }

    public async editEducationFundReimbursement(id: number, payload) {
        return this.updateData(EducationFundReimbursement, id, payload, 'Admin');
    }
}
