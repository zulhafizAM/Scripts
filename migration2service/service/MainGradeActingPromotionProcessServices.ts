import BaseService from 'App/Services/BaseService';
import MainGradeActingPromotionProcess from 'App/Models/MainGradeActingPromotionProcess';

export default class MainGradeActingPromotionProcessServices extends BaseService {
    public async getMainGradeActingPromotionProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(MainGradeActingPromotionProcess, { page, perPage });
    }

    public async getMainGradeActingPromotionProcess(mainGradeActingPromotionProcessId: number) {
        const readMainGradeActingPromotionProcess = await MainGradeActingPromotionProcess.query()
            .where('active', true)
            .where('id', mainGradeActingPromotionProcessId)
            .preload('acting', (query) => query.where('active', true))
            .preload('certifier', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readMainGradeActingPromotionProcess;
    }

    public async addMainGradeActingPromotionProcess(payload) {
        return this.createData(MainGradeActingPromotionProcess, payload, 'Admin');
    }

    public async editMainGradeActingPromotionProcess(id: number, payload) {
        return this.updateData(MainGradeActingPromotionProcess, id, payload, 'Admin');
    }
}
