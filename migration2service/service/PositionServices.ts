import BaseService from 'App/Services/BaseService';
import Position from 'App/Models/Position';

export default class PositionServices extends BaseService {
    public async getPositions({ page = 1, perPage = 10 }) {
        return this.getDataList(Position, { page, perPage });
    }

    public async getPosition(positionId: number) {
        const readPosition = await Position.query()
            .where('active', true)
            .where('id', positionId)
            .preload('grade', (query) => query.where('active', true))
            .preload('employees', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('employmentInterims', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('meetings', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readPosition;
    }

    public async addPosition(payload) {
        return this.createData(Position, payload, 'Admin');
    }

    public async editPosition(id: number, payload) {
        return this.updateData(Position, id, payload, 'Admin');
    }
}
