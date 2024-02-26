import BaseService from 'App/Services/BaseService';
import ExamApplicationProcess from 'App/Models/ExamApplicationProcess';

export default class ExamApplicationProcessServices extends BaseService {
    public async getExamApplicationProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(ExamApplicationProcess, { page, perPage });
    }

    public async getExamApplicationProcess(examApplicationProcessId: number) {
        const readExamApplicationProcess = await ExamApplicationProcess.query()
            .where('active', true)
            .where('id', examApplicationProcessId)
            .preload('applicant', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('comfirmer', (query) => query.where('active', true))
            .firstOrFail();

        return readExamApplicationProcess;
    }

    public async addExamApplicationProcess(payload) {
        return this.createData(ExamApplicationProcess, payload, 'Admin');
    }

    public async editExamApplicationProcess(id: number, payload) {
        return this.updateData(ExamApplicationProcess, id, payload, 'Admin');
    }
}
