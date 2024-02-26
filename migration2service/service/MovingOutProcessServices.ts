import BaseService from 'App/Services/BaseService';
import MovingOutProcess from 'App/Models/MovingOutProcess';

export default class MovingOutProcessServices extends BaseService {
    public async getMovingOutProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(MovingOutProcess, { page, perPage });
    }

    public async getMovingOutProcess(movingOutProcessId: number) {
        const readMovingOutProcess = await MovingOutProcess.query()
            .where('active', true)
            .where('id', movingOutProcessId)
            .preload('movingOut', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('directorApprover', (query) => query.where('active', true))
            .firstOrFail();

        return readMovingOutProcess;
    }

    public async addMovingOutProcess(payload) {
        return this.createData(MovingOutProcess, payload, 'Admin');
    }

    public async editMovingOutProcess(id: number, payload) {
        return this.updateData(MovingOutProcess, id, payload, 'Admin');
    }
}
