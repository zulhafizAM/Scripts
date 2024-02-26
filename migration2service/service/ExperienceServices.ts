import BaseService from 'App/Services/BaseService';
import Experience from 'App/Models/Experience';

export default class ExperienceServices extends BaseService {
    public async getExperiences({ page = 1, perPage = 10 }) {
        return this.getDataList(Experience, { page, perPage });
    }

    public async getExperience(experienceId: number) {
        const readExperience = await Experience.query()
            .where('active', true)
            .where('id', experienceId)
            .preload('personalDetail', (query) => query.where('active', true))
            .firstOrFail();

        return readExperience;
    }

    public async addExperience(payload) {
        return this.createData(Experience, payload, 'Admin');
    }

    public async editExperience(id: number, payload) {
        return this.updateData(Experience, id, payload, 'Admin');
    }
}
