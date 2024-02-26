import BaseService from 'App/Services/BaseService';
import Religion from 'App/Models/Religion';

export default class ReligionServices extends BaseService {
    public async getReligions({ page = 1, perPage = 10 }) {
        return this.getDataList(Religion, { page, perPage });
    }

    public async getReligion(religionId: number) {
        const readReligion = await Religion.query()
            .where('active', true)
            .where('id', religionId)
            .preload('personalDetails', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readReligion;
    }

    public async addReligion(payload) {
        return this.createData(Religion, payload, 'Admin');
    }

    public async editReligion(id: number, payload) {
        return this.updateData(Religion, id, payload, 'Admin');
    }
}
