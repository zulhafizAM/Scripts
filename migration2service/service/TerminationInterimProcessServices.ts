import BaseService from 'App/Services/BaseService';
import TerminationInterimProcess from 'App/Models/TerminationInterimProcess';

export default class TerminationInterimProcessServices extends BaseService {
    public async getTerminationInterimProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(TerminationInterimProcess, { page, perPage });
    }

    public async getTerminationInterimProcess(terminationInterimProcessId: number) {
        const readTerminationInterimProcess = await TerminationInterimProcess.query()
            .where('active', true)
            .where('id', terminationInterimProcessId)
            .preload('termination', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readTerminationInterimProcess;
    }

    public async addTerminationInterimProcess(payload) {
        return this.createData(TerminationInterimProcess, payload, 'Admin');
    }

    public async editTerminationInterimProcess(id: number, payload) {
        return this.updateData(TerminationInterimProcess, id, payload, 'Admin');
    }
}
