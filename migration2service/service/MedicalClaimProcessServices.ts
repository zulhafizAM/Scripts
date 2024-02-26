import BaseService from 'App/Services/BaseService';
import MedicalClaimProcess from 'App/Models/MedicalClaimProcess';

export default class MedicalClaimProcessServices extends BaseService {
    public async getMedicalClaimProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(MedicalClaimProcess, { page, perPage });
    }

    public async getMedicalClaimProcess(medicalClaimProcessId: number) {
        const readMedicalClaimProcess = await MedicalClaimProcess.query()
            .where('active', true)
            .where('id', medicalClaimProcessId)
            .preload('claim', (query) => query.where('active', true))
            .preload('secretaryApprover', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('appointedApprover', (query) => query.where('active', true))
            .firstOrFail();

        return readMedicalClaimProcess;
    }

    public async addMedicalClaimProcess(payload) {
        return this.createData(MedicalClaimProcess, payload, 'Admin');
    }

    public async editMedicalClaimProcess(id: number, payload) {
        return this.updateData(MedicalClaimProcess, id, payload, 'Admin');
    }
}
