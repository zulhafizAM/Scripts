import BaseService from 'App/Services/BaseService';
import MovingInProcess from 'App/Models/MovingInProcess';

export default class MovingInProcessServices extends BaseService {
    public async getMovingInProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(MovingInProcess, { page, perPage });
    }

    public async getMovingInProcess(movingInProcessId: number) {
        const readMovingInProcess = await MovingInProcess.query()
            .where('active', true)
            .where('id', movingInProcessId)
            .preload('movingIn', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('secretaryApprover', (query) => query.where('active', true))
            .preload('directorApprover', (query) => query.where('active', true))
            .firstOrFail();

        return readMovingInProcess;
    }

    public async addMovingInProcess(payload) {
        return this.createData(MovingInProcess, payload, 'Admin');
    }

    public async editMovingInProcess(id: number, payload) {
        return this.updateData(MovingInProcess, id, payload, 'Admin');
    }
}
