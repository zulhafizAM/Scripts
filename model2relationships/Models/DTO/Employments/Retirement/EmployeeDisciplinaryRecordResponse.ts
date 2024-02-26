import { DateTime } from 'luxon';

export default class DisciplinaryRecordsResponse {
    public currentPageSize: number = 0;
    public pageNum: number = 0;
    public totalPage: number = 0;
    public totalData: number = 0;
    private disciplinaryRecordList: DisciplinaryRecordResponse[] = [];
    public get disciplinaryRecords(): DisciplinaryRecordResponse[] {
        return this.disciplinaryRecordList;
    }

    public set disciplinaryRecords(v: DisciplinaryRecordResponse[]) {
        this.disciplinaryRecordList = v;
        this.currentPageSize = this.disciplinaryRecordList.length;
    }
}

export class DisciplinaryRecordResponse {
    public disciplinaryId: bigint;
    public startDate: DateTime;
    public employeeNumber: string = '';
    public name: string = '';
    public status: string = '';
    public meetingResult: string = '';
}
