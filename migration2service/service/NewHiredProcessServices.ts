import BaseService from 'App/Services/BaseService';
import NewHiredProcess from 'App/Models/NewHiredProcess';

export default class NewHiredProcessServices extends BaseService {
    public async getNewHiredProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(NewHiredProcess, { page, perPage });
    }

    public async getNewHiredProcess(newHiredProcessId: number) {
        const readNewHiredProcess = await NewHiredProcess.query()
            .where('active', true)
            .where('id', newHiredProcessId)
            .preload('hired', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readNewHiredProcess;
    }

    public async addNewHiredProcess(payload) {
        return this.createData(NewHiredProcess, payload, 'Admin');
    }

    public async editNewHiredProcess(id: number, payload) {
        return this.updateData(NewHiredProcess, id, payload, 'Admin');
    }
}
