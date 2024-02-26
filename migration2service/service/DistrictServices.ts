import BaseService from 'App/Services/BaseService';
import District from 'App/Models/District';

export default class DistrictServices extends BaseService {
    public async getDistricts({ page = 1, perPage = 10 }) {
        return this.getDataList(District, { page, perPage });
    }

    public async getDistrict(districtId: number) {
        const readDistrict = await District.query()
            .where('active', true)
            .where('id', districtId)
            .preload('state', (query) => query.where('active', true))
            .preload('division', (query) => query.where('active', true))
            .preload('clinics', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readDistrict;
    }

    public async addDistrict(payload) {
        return this.createData(District, payload, 'Admin');
    }

    public async editDistrict(id: number, payload) {
        return this.updateData(District, id, payload, 'Admin');
    }
}
