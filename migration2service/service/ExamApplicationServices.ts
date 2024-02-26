import BaseService from 'App/Services/BaseService';
import ExamApplication from 'App/Models/ExamApplication';

export default class ExamApplicationServices extends BaseService {
    public async getExamApplications({ page = 1, perPage = 10 }) {
        return this.getDataList(ExamApplication, { page, perPage });
    }

    public async getExamApplication(examApplicationId: number) {
        const readExamApplication = await ExamApplication.query()
            .where('active', true)
            .where('id', examApplicationId)
            .preload('employee', (query) => query.where('active', true))
            .preload('exam', (query) => query.where('active', true))
            .preload('examApplicationProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readExamApplication;
    }

    public async addExamApplication(payload) {
        return this.createData(ExamApplication, payload, 'Admin');
    }

    public async editExamApplication(id: number, payload) {
        return this.updateData(ExamApplication, id, payload, 'Admin');
    }
}
