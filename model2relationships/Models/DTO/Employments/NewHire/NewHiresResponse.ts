import { DateTime } from 'luxon';

export default class NewHiresResponse {
    public currentPageSIze: number = 0;
    public pageNum: number = 0;
    public totalPage: number = 0;
    public totalData: number = 0;
    private newHireList: NewHireResponse[] = [];
    public get newHires(): NewHireResponse[] {
        return this.newHireList;
    }
    public set newHires(v: NewHireResponse[]) {
        this.newHireList = v;
        this.currentPageSIze = this.newHireList.length;
    }
}
export class NewHireResponse {
    public candidateId: bigint;
    public candidateName: string = '';
    public temporaryId: string = '';
    public identityCardNo: string = '';
    public email: string = '';
    public category: string;
    public dateRequested: DateTime;
    public dateHired: DateTime;
    public dateRetired: string;
    public status: string;
}
