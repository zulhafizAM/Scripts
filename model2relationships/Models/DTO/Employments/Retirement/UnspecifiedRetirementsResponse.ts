import { DateTime } from 'luxon';

export default class UnspecifiedRetirementsResponse {
    public currentPageSize: number = 0;
    public pageNum: number = 0;
    public totalPage: number = 0;
    public totalData: number = 0;
    private unspecifiedRetirementList: UnspecifiedRetirementResponse[] = [];
    public get unspecifiedRetirements(): UnspecifiedRetirementResponse[] {
        return this.unspecifiedRetirementList;
    }

    public set unspecifiedRetirements(v: UnspecifiedRetirementResponse[]) {
        this.unspecifiedRetirementList = v;
        this.currentPageSize = this.unspecifiedRetirementList.length;
    }
}

export class UnspecifiedRetirementResponse {
    public id: bigint;
    public name: string = '';
    public headCount: number;
    public date: DateTime;
    public status: string = '';
}
