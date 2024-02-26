import BaseService from 'App/Services/BaseService';
import GradeActingTypesProcess from 'App/Models/GradeActingTypesProcess';

export default class GradeActingTypesProcessServices extends BaseService {
    public async getGradeActingTypesProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(GradeActingTypesProcess, { page, perPage });
    }

    public async getGradeActingTypesProcess(gradeActingTypesProcessId: number) {
        const readGradeActingTypesProcess = await GradeActingTypesProcess.query()
            .where('active', true)
            .where('id', gradeActingTypesProcessId)
            .preload('acting', (query) => query.where('active', true))
            .preload('integrityCertifier', (query) => query.where('active', true))
            .preload('directorCertifier', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readGradeActingTypesProcess;
    }

    public async addGradeActingTypesProcess(payload) {
        return this.createData(GradeActingTypesProcess, payload, 'Admin');
    }

    public async editGradeActingTypesProcess(id: number, payload) {
        return this.updateData(GradeActingTypesProcess, id, payload, 'Admin');
    }
}
