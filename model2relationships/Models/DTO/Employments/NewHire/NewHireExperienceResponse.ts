import { DateTime } from 'luxon';

export default class NewHireExperienceResponse {
    public experienceList: NewHireExperienceDetailResponse[] = [];
    public isReadonly: boolean;
}
export class NewHireExperienceDetailResponse {
    public company: string;
    public address: string;
    public position: string;
    public positionCode: string;
    public startDate: DateTime;
    public endDate: DateTime;
    public salary: string;
}
