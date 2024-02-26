import BaseService from 'App/Services/BaseService';
import GradePromotionType from 'App/Models/GradePromotionType';

export default class GradePromotionTypeServices extends BaseService {
    public async getGradePromotionTypes({ page = 1, perPage = 10 }) {
        return this.getDataList(GradePromotionType, { page, perPage });
    }

    public async getGradePromotionType(gradePromotionTypeId: number) {
        const readGradePromotionType = await GradePromotionType.query()
            .where('active', true)
            .where('id', gradePromotionTypeId)
            .preload('employee', (query) => query.where('active', true))
            .preload('meeting', (query) => query.where('active', true))
            .preload('gradePromotionProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readGradePromotionType;
    }

    public async addGradePromotionType(payload) {
        return this.createData(GradePromotionType, payload, 'Admin');
    }

    public async editGradePromotionType(id: number, payload) {
        return this.updateData(GradePromotionType, id, payload, 'Admin');
    }
}
