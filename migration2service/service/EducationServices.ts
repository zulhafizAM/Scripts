import BaseService from 'App/Services/BaseService';
import Education from 'App/Models/Education';

export default class EducationServices extends BaseService {
    public async getEducations({ page = 1, perPage = 10 }) {
        return this.getDataList(Education, { page, perPage });
    }

    public async getEducation(educationId: number) {
        const readEducation = await Education.query()
            .where('active', true)
            .where('id', educationId)
            .preload('personalDetail', (query) => query.where('active', true))
            .firstOrFail();

        return readEducation;
    }

    public async addEducation(payload) {
        return this.createData(Education, payload, 'Admin');
    }

    public async editEducation(id: number, payload) {
        return this.updateData(Education, id, payload, 'Admin');
    }
}
