import AwardCategory from 'App/Models/AwardCategory';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class AwardCategoryServices extends BaseService {
    public async getAwardCategories(): Promise<
        DefaultListResponse<AwardCategoriesResponse>
    > {
        let awardCategoryList =
            new DefaultListResponse<AwardCategoriesResponse>();
        const readAwardCategory = await AwardCategory.query();

        awardCategoryList = {
            dataList: readAwardCategory.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return awardCategoryList;
    }
}
