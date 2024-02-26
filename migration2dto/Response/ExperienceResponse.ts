import { DateTime } from 'luxon';

export default class GetExperienceResponse {
    public experience: ExperienceResponse =
        new ExperienceResponse();
}
export class ExperienceResponse {
    public personalDetailId: bigint;
    public position: string = '';
    public company: string = '';
    public address: string = '';
    public startDate: DateTime;
    public endDate: DateTime;
    public description: string = '';
    public grade: string = '';

    public getFull(data) {
        this.personalDetailId = data.personalDetailId;
        this.position = data.position;
        this.company = data.company;
        this.address = data.address;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.description = data.description;
        this.grade = data.grade;
    }
}