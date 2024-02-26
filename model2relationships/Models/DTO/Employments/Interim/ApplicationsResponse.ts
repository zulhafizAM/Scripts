import { DateTime } from 'luxon';

export default class ApplicationsResponse {
    public currentPageSize: number = 0;
    public pageNum: number = 0;
    public totalPage: number = 0;
    public totalData: number = 0;
    private interimList: ApplicationResponse[] = [];
    public get interims(): ApplicationResponse[] {
        return this.interimList;
    }

    public set interims(v: ApplicationResponse[]) {
        this.interimList = v;
        this.currentPageSize = this.interimList.length;
    }
}

export class ApplicationResponse {
    public id: bigint;
    public employeeNumber: string = '';
    public name: string = '';
    public icNumber: string = '';
    public position: string = '';
    public interimPositon: string = '';
    public placement: string = '';
    public interimPlacement: string = '';
    public applicationDate: DateTime;
    public startDate: DateTime;
    public endDate: DateTime;
    public status: string = '';
    public remark: string = '';
}
