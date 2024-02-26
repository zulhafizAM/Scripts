import Award from 'App/Models/Award';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class AwardServices extends BaseService {
    public async getAwards(): Promise<
        DefaultListResponse<AwardsResponse>
    > {
        let awardList =
            new DefaultListResponse<AwardsResponse>();
        const readAward = await Award.query();

        awardList = {
            dataList: readAward.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return awardList;
    }
}
