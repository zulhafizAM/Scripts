import { DateTime } from 'luxon';

export default class GetTerminationInterimResponse {
    public terminationInterim: TerminationInterimResponse =
        new TerminationInterimResponse();
}
export class TerminationInterimResponse {
    public isInterimCompleted: boolean;

    public getFull(data) {
        this.isInterimCompleted = data.isInterimCompleted;
    }
}