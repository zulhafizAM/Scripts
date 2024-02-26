export default class NewHireAcademicResponse {
    public AcademicList: NewHireAcademicDetailResponse[] = [];
    public isReadonly: boolean;
}
export class NewHireAcademicDetailResponse {
    public id: bigint;
    public type: string;
    public name: string;
    public completionYear: number;
    public finalGrade: string;
    public field: string;
    public remark: string;
}
