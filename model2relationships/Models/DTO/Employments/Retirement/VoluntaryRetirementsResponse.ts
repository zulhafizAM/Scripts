import { DateTime } from 'luxon';

export default class RetirementsResponse {
    public currentPageSize: number = 0;
    public pageNum: number = 0;
    public totalPage: number = 0;
    public totalData: number = 0;
    private retirementList: RetirementResponse[] = [];
    public get retirements(): RetirementResponse[] {
        return this.retirementList;
    }

    public set retirements(v: RetirementResponse[]) {
        this.retirementList = v;
        this.currentPageSize = this.retirementList.length;
    }
}

export class RetirementResponse {
    public retirementId: bigint;
    public employeeNumber: string = '';
    public position: string = '';
    public name: string = '';
    public retirementDate: DateTime;
    public earlyRetirementDate: DateTime;
    public currentPlacement: string = '';
    public retirementType: string = '';
    public status: string = '';
}
