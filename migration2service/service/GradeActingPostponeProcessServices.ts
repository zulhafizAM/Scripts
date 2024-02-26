import BaseService from 'App/Services/BaseService';
import GradeActingPostponeProcess from 'App/Models/GradeActingPostponeProcess';

export default class GradeActingPostponeProcessServices extends BaseService {
    public async getGradeActingPostponeProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(GradeActingPostponeProcess, { page, perPage });
    }

    public async getGradeActingPostponeProcess(gradeActingPostponeProcessId: number) {
        const readGradeActingPostponeProcess = await GradeActingPostponeProcess.query()
            .where('active', true)
            .where('id', gradeActingPostponeProcessId)
            .preload('acting', (query) => query.where('active', true))
            .preload('meeting', (query) => query.where('active', true))
            .preload('placement', (query) => query.where('active', true))
            .firstOrFail();

        return readGradeActingPostponeProcess;
    }

    public async addGradeActingPostponeProcess(payload) {
        return this.createData(GradeActingPostponeProcess, payload, 'Admin');
    }

    public async editGradeActingPostponeProcess(id: number, payload) {
        return this.updateData(GradeActingPostponeProcess, id, payload, 'Admin');
    }
}
