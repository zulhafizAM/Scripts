import { DateTime } from 'luxon';

export default class GetEducationResponse {
    public education: EducationResponse =
        new EducationResponse();
}
export class EducationResponse {
    public name: string = '';
    public personalDetailId: bigint;
    public type: string = '';
    public year: number;
    public finalGrade: string = '';
    public field: string = '';
    public remarks: string = '';

    public getFull(data) {
        this.name = data.name;
        this.personalDetailId = data.personalDetailId;
        this.type = data.type;
        this.year = data.year;
        this.finalGrade = data.finalGrade;
        this.field = data.field;
        this.remarks = data.remarks;
    }
}