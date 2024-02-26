import BaseService from 'App/Services/BaseService';
import StateVisitAllowance from 'App/Models/StateVisitAllowance';

export default class StateVisitAllowanceServices extends BaseService {
    public async getStateVisitAllowances({ page = 1, perPage = 10 }) {
        return this.getDataList(StateVisitAllowance, { page, perPage });
    }

    public async getStateVisitAllowance(stateVisitAllowanceId: number) {
        const readStateVisitAllowance = await StateVisitAllowance.query()
            .where('active', true)
            .where('id', stateVisitAllowanceId)
            .preload('allowance', (query) => query.where('active', true))
            .preload('state', (query) => query.where('active', true))
            .preload('stateVisitAllowanceProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readStateVisitAllowance;
    }

    public async addStateVisitAllowance(payload) {
        return this.createData(StateVisitAllowance, payload, 'Admin');
    }

    public async editStateVisitAllowance(id: number, payload) {
        return this.updateData(StateVisitAllowance, id, payload, 'Admin');
    }
}
