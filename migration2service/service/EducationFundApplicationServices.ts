import BaseService from 'App/Services/BaseService';
import EducationFundApplication from 'App/Models/EducationFundApplication';

export default class EducationFundApplicationServices extends BaseService {
    public async getEducationFundApplications({ page = 1, perPage = 10 }) {
        return this.getDataList(EducationFundApplication, { page, perPage });
    }

    public async getEducationFundApplication(educationFundApplicationId: number) {
        const readEducationFundApplication = await EducationFundApplication.query()
            .where('active', true)
            .where('id', educationFundApplicationId)
            .preload('employee', (query) => query.where('active', true))
            .preload('fundApplicationProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readEducationFundApplication;
    }

    public async addEducationFundApplication(payload) {
        return this.createData(EducationFundApplication, payload, 'Admin');
    }

    public async editEducationFundApplication(id: number, payload) {
        return this.updateData(EducationFundApplication, id, payload, 'Admin');
    }
}
