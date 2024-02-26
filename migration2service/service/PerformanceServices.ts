import BaseService from 'App/Services/BaseService';
import Performance from 'App/Models/Performance';

export default class PerformanceServices extends BaseService {
    public async getPerformances({ page = 1, perPage = 10 }) {
        return this.getDataList(Performance, { page, perPage });
    }

    public async getPerformance(performanceId: number) {
        const readPerformance = await Performance.query()
            .where('active', true)
            .where('id', performanceId)
            .preload('employee', (query) => query.where('active', true))
            .preload('PPKEmployee', (query) => query.where('active', true))
            .preload('PPPEmployee', (query) => query.where('active', true))
            .preload('performanceContributionNotOfficialDuties', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readPerformance;
    }

    public async addPerformance(payload) {
        return this.createData(Performance, payload, 'Admin');
    }

    public async editPerformance(id: number, payload) {
        return this.updateData(Performance, id, payload, 'Admin');
    }
}
