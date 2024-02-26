import BaseService from 'App/Services/BaseService';
import ClinicClaimProcess from 'App/Models/ClinicClaimProcess';

export default class ClinicClaimProcessServices extends BaseService {
    public async getClinicClaimProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(ClinicClaimProcess, { page, perPage });
    }

    public async getClinicClaimProcess(clinicClaimProcessId: number) {
        const readClinicClaimProcess = await ClinicClaimProcess.query()
            .where('active', true)
            .where('id', clinicClaimProcessId)
            .preload('claim', (query) => query.where('active', true))
            .preload('secretaryApprover', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('appointedApprover', (query) => query.where('active', true))
            .firstOrFail();

        return readClinicClaimProcess;
    }

    public async addClinicClaimProcess(payload) {
        return this.createData(ClinicClaimProcess, payload, 'Admin');
    }

    public async editClinicClaimProcess(id: number, payload) {
        return this.updateData(ClinicClaimProcess, id, payload, 'Admin');
    }
}
