import BaseService from 'App/Services/BaseService';
import MovingOut from 'App/Models/MovingOut';

export default class MovingOutServices extends BaseService {
    public async getMovingOuts({ page = 1, perPage = 10 }) {
        return this.getDataList(MovingOut, { page, perPage });
    }

    public async getMovingOut(movingOutId: number) {
        const readMovingOut = await MovingOut.query()
            .where('active', true)
            .where('id', movingOutId)
            .preload('quarters', (query) => query.where('active', true))
            .preload('movingOutProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readMovingOut;
    }

    public async addMovingOut(payload) {
        return this.createData(MovingOut, payload, 'Admin');
    }

    public async editMovingOut(id: number, payload) {
        return this.updateData(MovingOut, id, payload, 'Admin');
    }
}
