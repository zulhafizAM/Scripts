import BaseService from 'App/Services/BaseService';
import HouseMovingAllowance from 'App/Models/HouseMovingAllowance';

export default class HouseMovingAllowanceServices extends BaseService {
    public async getHouseMovingAllowances({ page = 1, perPage = 10 }) {
        return this.getDataList(HouseMovingAllowance, { page, perPage });
    }

    public async getHouseMovingAllowance(houseMovingAllowanceId: number) {
        const readHouseMovingAllowance = await HouseMovingAllowance.query()
            .where('active', true)
            .where('id', houseMovingAllowanceId)
            .preload('allowance', (query) => query.where('active', true))
            .preload('houseMovingProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readHouseMovingAllowance;
    }

    public async addHouseMovingAllowance(payload) {
        return this.createData(HouseMovingAllowance, payload, 'Admin');
    }

    public async editHouseMovingAllowance(id: number, payload) {
        return this.updateData(HouseMovingAllowance, id, payload, 'Admin');
    }
}
