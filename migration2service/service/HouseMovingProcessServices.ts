import BaseService from 'App/Services/BaseService';
import HouseMovingProcess from 'App/Models/HouseMovingProcess';

export default class HouseMovingProcessServices extends BaseService {
    public async getHouseMovingProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(HouseMovingProcess, { page, perPage });
    }

    public async getHouseMovingProcess(houseMovingProcessId: number) {
        const readHouseMovingProcess = await HouseMovingProcess.query()
            .where('active', true)
            .where('id', houseMovingProcessId)
            .preload('houseMoving', (query) => query.where('active', true))
            .preload('confirmer', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readHouseMovingProcess;
    }

    public async addHouseMovingProcess(payload) {
        return this.createData(HouseMovingProcess, payload, 'Admin');
    }

    public async editHouseMovingProcess(id: number, payload) {
        return this.updateData(HouseMovingProcess, id, payload, 'Admin');
    }
}
