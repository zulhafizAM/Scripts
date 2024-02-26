import BaseService from 'App/Services/BaseService';
import PensionDetailProcess from 'App/Models/PensionDetailProcess';

export default class PensionDetailProcessServices extends BaseService {
    public async getPensionDetailProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(PensionDetailProcess, { page, perPage });
    }

    public async getPensionDetailProcess(pensionDetailProcessId: number) {
        const readPensionDetailProcess = await PensionDetailProcess.query()
            .where('active', true)
            .where('id', pensionDetailProcessId)
            .preload('pension', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readPensionDetailProcess;
    }

    public async addPensionDetailProcess(payload) {
        return this.createData(PensionDetailProcess, payload, 'Admin');
    }

    public async editPensionDetailProcess(id: number, payload) {
        return this.updateData(PensionDetailProcess, id, payload, 'Admin');
    }
}
