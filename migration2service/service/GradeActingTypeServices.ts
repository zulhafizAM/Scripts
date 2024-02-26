import BaseService from 'App/Services/BaseService';
import GradeActingType from 'App/Models/GradeActingType';

export default class GradeActingTypeServices extends BaseService {
    public async getGradeActingTypes({ page = 1, perPage = 10 }) {
        return this.getDataList(GradeActingType, { page, perPage });
    }

    public async getGradeActingType(gradeActingTypeId: number) {
        const readGradeActingType = await GradeActingType.query()
            .where('active', true)
            .where('id', gradeActingTypeId)
            .preload('employee', (query) => query.where('active', true))
            .preload('meeting', (query) => query.where('active', true))
            .preload('gradeActingTypesProcess', (query) => query.where('active', true))
            .preload('gradeActingPostponeProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readGradeActingType;
    }

    public async addGradeActingType(payload) {
        return this.createData(GradeActingType, payload, 'Admin');
    }

    public async editGradeActingType(id: number, payload) {
        return this.updateData(GradeActingType, id, payload, 'Admin');
    }
}
