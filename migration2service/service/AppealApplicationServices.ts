import BaseService from 'App/Services/BaseService';
import AppealApplication from 'App/Models/AppealApplication';

export default class AppealApplicationServices extends BaseService {
    public async getAppealApplications({ page = 1, perPage = 10 }) {
        return this.getDataList(AppealApplication, { page, perPage });
    }

    public async getAppealApplication(appealApplicationId: number) {
        const readAppealApplication = await AppealApplication.query()
            .where('active', true)
            .where('id', appealApplicationId)
            .preload('employee', (query) => query.where('active', true))
            .preload('meeting', (query) => query.where('active', true))
            .firstOrFail();

        return readAppealApplication;
    }

    public async addAppealApplication(payload) {
        return this.createData(AppealApplication, payload, 'Admin');
    }

    public async editAppealApplication(id: number, payload) {
        return this.updateData(AppealApplication, id, payload, 'Admin');
    }
}
