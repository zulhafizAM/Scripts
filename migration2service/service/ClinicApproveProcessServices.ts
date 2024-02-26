import BaseService from 'App/Services/BaseService';
import ClinicApproveProcess from 'App/Models/ClinicApproveProcess';

export default class ClinicApproveProcessServices extends BaseService {
    public async getClinicApproveProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(ClinicApproveProcess, { page, perPage });
    }

    public async getClinicApproveProcess(clinicApproveProcessId: number) {
        const readClinicApproveProcess = await ClinicApproveProcess.query()
            .where('active', true)
            .where('id', clinicApproveProcessId)
            .preload('clinic', (query) => query.where('active', true))
            .preload('comfirmer', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readClinicApproveProcess;
    }

    public async addClinicApproveProcess(payload) {
        return this.createData(ClinicApproveProcess, payload, 'Admin');
    }

    public async editClinicApproveProcess(id: number, payload) {
        return this.updateData(ClinicApproveProcess, id, payload, 'Admin');
    }
}
