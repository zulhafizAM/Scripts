import BaseService from 'App/Services/BaseService';
import PersonalDetail from 'App/Models/PersonalDetail';

export default class PersonalDetailServices extends BaseService {
    public async getPersonalDetails({ page = 1, perPage = 10 }) {
        return this.getDataList(PersonalDetail, { page, perPage });
    }

    public async getPersonalDetail(personalDetailId: number) {
        const readPersonalDetail = await PersonalDetail.query()
            .where('active', true)
            .where('id', personalDetailId)
            .preload('birthState', (query) => query.where('active', true))
            .preload('race', (query) => query.where('active', true))
            .preload('religion', (query) => query.where('active', true))
            .preload('mailState', (query) => query.where('active', true))
            .preload('homeState', (query) => query.where('active', true))
            .preload('candidate', (query) => query.where('active', true))
            .preload('employee', (query) => query.where('active', true))
            .preload('activities', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('dependents', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('nextOfKins', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('educations', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('experiences', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readPersonalDetail;
    }

    public async addPersonalDetail(payload) {
        return this.createData(PersonalDetail, payload, 'Admin');
    }

    public async editPersonalDetail(id: number, payload) {
        return this.updateData(PersonalDetail, id, payload, 'Admin');
    }
}
