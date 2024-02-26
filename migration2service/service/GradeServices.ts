import BaseService from 'App/Services/BaseService';
import Grade from 'App/Models/Grade';

export default class GradeServices extends BaseService {
    public async getGrades({ page = 1, perPage = 10 }) {
        return this.getDataList(Grade, { page, perPage });
    }

    public async getGrade(gradeId: number) {
        const readGrade = await Grade.query()
            .where('active', true)
            .where('id', gradeId)
            .preload('employmentInterims', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('positions', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('meetings', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('employees', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readGrade;
    }

    public async addGrade(payload) {
        return this.createData(Grade, payload, 'Admin');
    }

    public async editGrade(id: number, payload) {
        return this.updateData(Grade, id, payload, 'Admin');
    }
}
