import { DateTime } from 'luxon';
import { BaseResponse } from '../../BaseResponse';

export default class GradePromotionTypesResponse extends BaseResponse<GradePromotionTypeResponse> {
    private gradePromotionTypeList: GradePromotionTypeResponse[] = [];
    public get gradePromotionTypes(): GradePromotionTypeResponse[] {
        return this.gradePromotionTypeList;
    }
    public set gradePromotionTypes(v: GradePromotionTypeResponse[]) {
        this.gradePromotionTypeList = v;
        this.currentPageSize = this.gradePromotionTypeList.length;
    }
}
export class GradePromotionTypeResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public category: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
