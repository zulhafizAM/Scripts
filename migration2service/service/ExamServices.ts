import BaseService from 'App/Services/BaseService';
import Exam from 'App/Models/Exam';

export default class ExamServices extends BaseService {
    public async getExams({ page = 1, perPage = 10 }) {
        return this.getDataList(Exam, { page, perPage });
    }

    public async getExam(examId: number) {
        const readExam = await Exam.query()
            .where('active', true)
            .where('id', examId)
            .preload('examType', (query) => query.where('active', true))
            .preload('examApplication', (query) => query.where('active', true))
            .firstOrFail();

        return readExam;
    }

    public async addExam(payload) {
        return this.createData(Exam, payload, 'Admin');
    }

    public async editExam(id: number, payload) {
        return this.updateData(Exam, id, payload, 'Admin');
    }
}
