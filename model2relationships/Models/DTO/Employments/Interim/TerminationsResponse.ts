import { DateTime } from 'luxon';

export default class TerminationsResponse {
    public currentPageSize: number = 0;
    public pageNum: number = 0;
    public totalPage: number = 0;
    public totalData: number = 0;
    private interimList: TerminationResponse[] = [];
    public get interims(): TerminationResponse[] {
        return this.interimList;
    }

    public set interims(v: TerminationResponse[]) {
        this.interimList = v;
        this.currentPageSize = this.interimList.length;
    }
}

export class TerminationResponse {
    public id: bigint;
    public employeeNumber: string = '';
    public name: string = '';
    public icNumber: string = '';
    public position: string = '';
    public interimPositon: string = '';
    public placement: string = '';
    public interimPlacement: string = '';
    public startDate: DateTime;
    public endDate: DateTime;
    public status: string = '';
    public remark: string = '';
}
