import { DateTime } from 'luxon';

export default class GetPerformanceContributionNotOfficialDutyResponse {
    public performanceContributionNotOfficialDuty: PerformanceContributionNotOfficialDutyResponse =
        new PerformanceContributionNotOfficialDutyResponse();
}
export class PerformanceContributionNotOfficialDutyResponse {
    public performanceId: bigint;
    public name: string = '';
    public achievement: string = '';

    public getFull(data) {
        this.performanceId = data.performanceId;
        this.name = data.name;
        this.achievement = data.achievement;
    }
}