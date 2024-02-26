export class BaseResponse<T> {
    public currentPageSize: number;
    public pageNum: number;
    public totalPage: number;
    public totalData: number;
    private dataList: T[] = [];

    public get data(): T[] {
        return this.dataList;
    }

    public set data(v: T[]) {
        this.dataList = v;
        this.currentPageSize = this.dataList.length;
    }
}
