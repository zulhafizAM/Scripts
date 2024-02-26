import BaseService from 'App/Services/BaseService';
import MovingIn from 'App/Models/MovingIn';

export default class MovingInServices extends BaseService {
    public async getMovingIns({ page = 1, perPage = 10 }) {
        return this.getDataList(MovingIn, { page, perPage });
    }

    public async getMovingIn(movingInId: number) {
        const readMovingIn = await MovingIn.query()
            .where('active', true)
            .where('id', movingInId)
            .preload('quarters', (query) => query.where('active', true))
            .preload('movingInProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readMovingIn;
    }

    public async addMovingIn(payload) {
        return this.createData(MovingIn, payload, 'Admin');
    }

    public async editMovingIn(id: number, payload) {
        return this.updateData(MovingIn, id, payload, 'Admin');
    }
}
