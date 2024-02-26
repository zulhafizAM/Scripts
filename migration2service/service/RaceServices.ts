import BaseService from 'App/Services/BaseService';
import Race from 'App/Models/Race';

export default class RaceServices extends BaseService {
    public async getRaces({ page = 1, perPage = 10 }) {
        return this.getDataList(Race, { page, perPage });
    }

    public async getRace(raceId: number) {
        const readRace = await Race.query()
            .where('active', true)
            .where('id', raceId)
            .preload('personalDetails', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readRace;
    }

    public async addRace(payload) {
        return this.createData(Race, payload, 'Admin');
    }

    public async editRace(id: number, payload) {
        return this.updateData(Race, id, payload, 'Admin');
    }
}
