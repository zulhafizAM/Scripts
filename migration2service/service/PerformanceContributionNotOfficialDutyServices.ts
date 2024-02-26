import BaseService from 'App/Services/BaseService';
import PerformanceContributionNotOfficialDuty from 'App/Models/PerformanceContributionNotOfficialDuty';

export default class PerformanceContributionNotOfficialDutyServices extends BaseService {
    public async getPerformanceContributionNotOfficialDuties({ page = 1, perPage = 10 }) {
        return this.getDataList(PerformanceContributionNotOfficialDuty, { page, perPage });
    }

    public async getPerformanceContributionNotOfficialDuty(performanceContributionNotOfficialDutyId: number) {
        const readPerformanceContributionNotOfficialDuty = await PerformanceContributionNotOfficialDuty.query()
            .where('active', true)
            .where('id', performanceContributionNotOfficialDutyId)
            .preload('performance', (query) => query.where('active', true))
            .firstOrFail();

        return readPerformanceContributionNotOfficialDuty;
    }

    public async addPerformanceContributionNotOfficialDuty(payload) {
        return this.createData(PerformanceContributionNotOfficialDuty, payload, 'Admin');
    }

    public async editPerformanceContributionNotOfficialDuty(id: number, payload) {
        return this.updateData(PerformanceContributionNotOfficialDuty, id, payload, 'Admin');
    }
}
