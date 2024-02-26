import BaseService from 'App/Services/BaseService';
import CandidateType from 'App/Models/CandidateType';

export default class CandidateTypeServices extends BaseService {
    public async getCandidateTypes({ page = 1, perPage = 10 }) {
        return this.getDataList(CandidateType, { page, perPage });
    }

    public async getCandidateType(candidateTypeId: number) {
        const readCandidateType = await CandidateType.query()
            .where('active', true)
            .where('id', candidateTypeId)
            .firstOrFail();

        return readCandidateType;
    }

    public async addCandidateType(payload) {
        return this.createData(CandidateType, payload, 'Admin');
    }

    public async editCandidateType(id: number, payload) {
        return this.updateData(CandidateType, id, payload, 'Admin');
    }
}
