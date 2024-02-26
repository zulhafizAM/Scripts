import BaseService from 'App/Services/BaseService';
import StateVisitAllowanceProcess from 'App/Models/StateVisitAllowanceProcess';

export default class StateVisitAllowanceProcessServices extends BaseService {
    public async getStateVisitAllowanceProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(StateVisitAllowanceProcess, { page, perPage });
    }

    public async getStateVisitAllowanceProcess(stateVisitAllowanceProcessId: number) {
        const readStateVisitAllowanceProcess = await StateVisitAllowanceProcess.query()
            .where('active', true)
            .where('id', stateVisitAllowanceProcessId)
            .preload('stateVisited', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readStateVisitAllowanceProcess;
    }

    public async addStateVisitAllowanceProcess(payload) {
        return this.createData(StateVisitAllowanceProcess, payload, 'Admin');
    }

    public async editStateVisitAllowanceProcess(id: number, payload) {
        return this.updateData(StateVisitAllowanceProcess, id, payload, 'Admin');
    }
}
