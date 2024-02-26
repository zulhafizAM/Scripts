import BaseService from 'App/Services/BaseService';
import State from 'App/Models/State';

export default class StateServices extends BaseService {
    public async getStates({ page = 1, perPage = 10 }) {
        return this.getDataList(State, { page, perPage });
    }

    public async getState(stateId: number) {
        const readState = await State.query()
            .where('active', true)
            .where('id', stateId)
            .preload('divisions', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('personalDetails', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('personalDetails', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('personalDetails', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('experiences', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('nextOfKins', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('stateVisitAllowances', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readState;
    }

    public async addState(payload) {
        return this.createData(State, payload, 'Admin');
    }

    public async editState(id: number, payload) {
        return this.updateData(State, id, payload, 'Admin');
    }
}
