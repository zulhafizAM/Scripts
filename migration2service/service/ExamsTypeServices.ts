import BaseService from 'App/Services/BaseService';
import ExamsType from 'App/Models/ExamsType';

export default class ExamsTypeServices extends BaseService {
    public async getExamsTypes({ page = 1, perPage = 10 }) {
        return this.getDataList(ExamsType, { page, perPage });
    }

    public async getExamsType(examsTypeId: number) {
        const readExamsType = await ExamsType.query()
            .where('active', true)
            .where('id', examsTypeId)
            .preload('exams', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readExamsType;
    }

    public async addExamsType(payload) {
        return this.createData(ExamsType, payload, 'Admin');
    }

    public async editExamsType(id: number, payload) {
        return this.updateData(ExamsType, id, payload, 'Admin');
    }
}
