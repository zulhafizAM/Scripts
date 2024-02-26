import BaseService from 'App/Services/BaseService';
import AllowanceType from 'App/Models/AllowanceType';

export default class AllowanceTypeServices extends BaseService {
    public async getAllowanceTypes({ page = 1, perPage = 10 }) {
        return this.getDataList(AllowanceType, { page, perPage });
    }

    public async getAllowanceType(allowanceTypeId: number) {
        const readAllowanceType = await AllowanceType.query()
            .where('active', true)
            .where('id', allowanceTypeId)
            .preload('serviceAllowances', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readAllowanceType;
    }

    public async addAllowanceType(payload) {
        return this.createData(AllowanceType, payload, 'Admin');
    }

    public async editAllowanceType(id: number, payload) {
        return this.updateData(AllowanceType, id, payload, 'Admin');
    }
}
