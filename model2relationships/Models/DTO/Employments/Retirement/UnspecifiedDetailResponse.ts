import { DateTime } from 'luxon';

export default class UnspecifiedDetailsResponse {
    public currentPageSize: number = 0;
    public pageNum: number = 0;
    public totalPage: number = 0;
    public totalData: number = 0;
    private unspecifiedDetailList: UnspecifiedDetailResponse[] = [];
    public get unspecifiedDetails(): UnspecifiedDetailResponse[] {
        return this.unspecifiedDetailList;
    }

    public set unspecifiedDetails(v: UnspecifiedDetailResponse[]) {
        this.unspecifiedDetailList = v;
        this.currentPageSize = this.unspecifiedDetailList.length;
    }
}

export class UnspecifiedDetailResponse {
    public id: bigint;
    public employeeNumber: string = '';
    public name: string = '';
    public identityCardNumber: string = '';
    public retirementType: string = '';
    public retirementDate: DateTime;
}
