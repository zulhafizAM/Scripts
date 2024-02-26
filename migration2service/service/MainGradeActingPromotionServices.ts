import BaseService from 'App/Services/BaseService';
import MainGradeActingPromotion from 'App/Models/MainGradeActingPromotion';

export default class MainGradeActingPromotionServices extends BaseService {
    public async getMainGradeActingPromotions({ page = 1, perPage = 10 }) {
        return this.getDataList(MainGradeActingPromotion, { page, perPage });
    }

    public async getMainGradeActingPromotion(mainGradeActingPromotionId: number) {
        const readMainGradeActingPromotion = await MainGradeActingPromotion.query()
            .where('active', true)
            .where('id', mainGradeActingPromotionId)
            .preload('employee', (query) => query.where('active', true))
            .preload('meeting', (query) => query.where('active', true))
            .preload('mainGradeActingPromotionProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readMainGradeActingPromotion;
    }

    public async addMainGradeActingPromotion(payload) {
        return this.createData(MainGradeActingPromotion, payload, 'Admin');
    }

    public async editMainGradeActingPromotion(id: number, payload) {
        return this.updateData(MainGradeActingPromotion, id, payload, 'Admin');
    }
}
