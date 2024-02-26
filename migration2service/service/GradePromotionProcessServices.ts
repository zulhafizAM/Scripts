import BaseService from 'App/Services/BaseService';
import GradePromotionProcess from 'App/Models/GradePromotionProcess';

export default class GradePromotionProcessServices extends BaseService {
    public async getGradePromotionProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(GradePromotionProcess, { page, perPage });
    }

    public async getGradePromotionProcess(gradePromotionProcessId: number) {
        const readGradePromotionProcess = await GradePromotionProcess.query()
            .where('active', true)
            .where('id', gradePromotionProcessId)
            .preload('integrityCertifier', (query) => query.where('active', true))
            .preload('directorCertifier', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readGradePromotionProcess;
    }

    public async addGradePromotionProcess(payload) {
        return this.createData(GradePromotionProcess, payload, 'Admin');
    }

    public async editGradePromotionProcess(id: number, payload) {
        return this.updateData(GradePromotionProcess, id, payload, 'Admin');
    }
}
