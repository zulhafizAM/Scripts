import BaseService from 'App/Services/BaseService';
import PersonalInsuranceProcess from 'App/Models/PersonalInsuranceProcess';

export default class PersonalInsuranceProcessServices extends BaseService {
    public async getPersonalInsuranceProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(PersonalInsuranceProcess, { page, perPage });
    }

    public async getPersonalInsuranceProcess(personalInsuranceProcessId: number) {
        const readPersonalInsuranceProcess = await PersonalInsuranceProcess.query()
            .where('active', true)
            .where('id', personalInsuranceProcessId)
            .preload('insurance', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readPersonalInsuranceProcess;
    }

    public async addPersonalInsuranceProcess(payload) {
        return this.createData(PersonalInsuranceProcess, payload, 'Admin');
    }

    public async editPersonalInsuranceProcess(id: number, payload) {
        return this.updateData(PersonalInsuranceProcess, id, payload, 'Admin');
    }
}
