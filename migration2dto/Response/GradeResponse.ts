import { DateTime } from 'luxon';

export default class GetGradeResponse {
    public grade: GradeResponse =
        new GradeResponse();
}
export class GradeResponse {
    public name: string = '';
    public code: string = '';
    public minimumSalary: number;
    public maximumSalary: number;
    public annualIncrementRate: number;

    public getFull(data) {
        this.name = data.name;
        this.code = data.code;
        this.minimumSalary = data.minimumSalary;
        this.maximumSalary = data.maximumSalary;
        this.annualIncrementRate = data.annualIncrementRate;
    }
}