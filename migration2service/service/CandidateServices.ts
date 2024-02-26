import BaseService from 'App/Services/BaseService';
import Candidate from 'App/Models/Candidate';

export default class CandidateServices extends BaseService {
    public async getCandidates({ page = 1, perPage = 10 }) {
        return this.getDataList(Candidate, { page, perPage });
    }

    public async getCandidate(candidateId: number) {
        const readCandidate = await Candidate.query()
            .where('active', true)
            .where('id', candidateId)
            .preload('personalDetail', (query) => query.where('active', true))
            .preload('candidateType', (query) => query.where('active', true))
            .preload('employee', (query) => query.where('active', true))
            .preload('userAccount', (query) => query.where('active', true))
            .preload('contractDetails', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readCandidate;
    }

    public async addCandidate(payload) {
        return this.createData(Candidate, payload, 'Admin');
    }

    public async editCandidate(id: number, payload) {
        return this.updateData(Candidate, id, payload, 'Admin');
    }
}
