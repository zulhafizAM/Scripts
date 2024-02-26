import { DateTime } from 'luxon';

export default class GetChecklistInterimResponse {
    public checklistInterim: ChecklistInterimResponse =
        new ChecklistInterimResponse();
}
export class ChecklistInterimResponse {
    public preparerId: bigint;
    public checkerId: bigint;
    public applicationLetterStatus: boolean;
    public applicationLetterCheck: boolean;
    public certifiedFormStatus: boolean;
    public certifiedFormCheck: boolean;
    public organisationalChartStatus: boolean;
    public organisationalChartCheck: boolean;
    public jobDescriptionStatus: boolean;
    public jobDescriptionCheck: boolean;
    public orderLetterStatus: boolean;
    public orderLetterCheck: boolean;
    public leaveStatementStatus: boolean;
    public leaveStatementCheck: boolean;
    public documentListStatus: boolean;
    public documentListCheck: boolean;
    public justificationStatus: boolean;
    public justificationCheck: boolean;

    public getFull(data) {
        this.preparerId = data.preparerId;
        this.checkerId = data.checkerId;
        this.applicationLetterStatus = data.applicationLetterStatus;
        this.applicationLetterCheck = data.applicationLetterCheck;
        this.certifiedFormStatus = data.certifiedFormStatus;
        this.certifiedFormCheck = data.certifiedFormCheck;
        this.organisationalChartStatus = data.organisationalChartStatus;
        this.organisationalChartCheck = data.organisationalChartCheck;
        this.jobDescriptionStatus = data.jobDescriptionStatus;
        this.jobDescriptionCheck = data.jobDescriptionCheck;
        this.orderLetterStatus = data.orderLetterStatus;
        this.orderLetterCheck = data.orderLetterCheck;
        this.leaveStatementStatus = data.leaveStatementStatus;
        this.leaveStatementCheck = data.leaveStatementCheck;
        this.documentListStatus = data.documentListStatus;
        this.documentListCheck = data.documentListCheck;
        this.justificationStatus = data.justificationStatus;
        this.justificationCheck = data.justificationCheck;
    }
}