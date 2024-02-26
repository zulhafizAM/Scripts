import { DateTime } from 'luxon';
import { BaseResponse } from './BaseResponse';

export default class ForcedByDirectorsResponse extends BaseResponse<ForcedByDirectorResponse> {
    private forcedByDirectorList: ForcedByDirectorResponse[] = [];
    public get forcedByDirectors(): ForcedByDirectorResponse[] {
        return this.forcedByDirectorList;
    }
    public set forcedByDirectors(v: ForcedByDirectorResponse[]) {
        this.forcedByDirectorList = v;
        this.currentPageSize = this.forcedByDirectorList.length;
    }
}

export class ForcedByDirectorResponse {
    public transferDate: DateTime;
    public startDate: DateTime;
    public newPlacementName: string;
    public status: string;
    public remark: string;
}
