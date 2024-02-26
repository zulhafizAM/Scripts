import { DateTime } from 'luxon';

export default class GetCandidateTypeResponse {
    public candidateType: CandidateTypeResponse =
        new CandidateTypeResponse();
}
export class CandidateTypeResponse {
    public name: string = '';

    public getFull(data) {
        this.name = data.name;
    }
}