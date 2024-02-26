import BaseService from 'App/Services/BaseService';
import ApplicationInterimProcess from 'App/Models/ApplicationInterimProcess';

export default class ApplicationInterimProcessServices extends BaseService {
    public async getApplicationInterimProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(ApplicationInterimProcess, { page, perPage });
    }

    public async getApplicationInterimProcess(applicationInterimProcessId: number) {
        const readApplicationInterimProcess = await ApplicationInterimProcess.query()
            .where('active', true)
            .where('id', applicationInterimProcessId)
            .preload('application', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readApplicationInterimProcess;
    }

    public async addApplicationInterimProcess(payload) {
        return this.createData(ApplicationInterimProcess, payload, 'Admin');
    }

    public async editApplicationInterimProcess(id: number, payload) {
        return this.updateData(ApplicationInterimProcess, id, payload, 'Admin');
    }
}
