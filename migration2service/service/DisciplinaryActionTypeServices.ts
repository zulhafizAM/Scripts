import BaseService from 'App/Services/BaseService';
import DisciplinaryActionType from 'App/Models/DisciplinaryActionType';

export default class DisciplinaryActionTypeServices extends BaseService {
    public async getDisciplinaryActionTypes({ page = 1, perPage = 10 }) {
        return this.getDataList(DisciplinaryActionType, { page, perPage });
    }

    public async getDisciplinaryActionType(disciplinaryActionTypeId: number) {
        const readDisciplinaryActionType = await DisciplinaryActionType.query()
            .where('active', true)
            .where('id', disciplinaryActionTypeId)
            .preload('integrityProceedings', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readDisciplinaryActionType;
    }

    public async addDisciplinaryActionType(payload) {
        return this.createData(DisciplinaryActionType, payload, 'Admin');
    }

    public async editDisciplinaryActionType(id: number, payload) {
        return this.updateData(DisciplinaryActionType, id, payload, 'Admin');
    }
}
