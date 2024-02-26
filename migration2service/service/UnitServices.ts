import BaseService from 'App/Services/BaseService';
import Unit from 'App/Models/Unit';

export default class UnitServices extends BaseService {
    public async getUnits({ page = 1, perPage = 10 }) {
        return this.getDataList(Unit, { page, perPage });
    }

    public async getUnit(unitId: number) {
        const readUnit = await Unit.query()
            .where('active', true)
            .where('id', unitId)
            .preload('department', (query) => query.where('active', true))
            .preload('section', (query) => query.where('active', true))
            .preload('employees', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readUnit;
    }

    public async addUnit(payload) {
        return this.createData(Unit, payload, 'Admin');
    }

    public async editUnit(id: number, payload) {
        return this.updateData(Unit, id, payload, 'Admin');
    }
}
