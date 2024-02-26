import HighestEducationLevel from 'App/Models/HighestEducationLevel';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class HighestEducationLevelServices extends BaseService {
    public async getHighestEducationLevels(): Promise<
        DefaultListResponse<HighestEducationLevelsResponse>
    > {
        let highestEducationLevelList =
            new DefaultListResponse<HighestEducationLevelsResponse>();
        const readHighestEducationLevel = await HighestEducationLevel.query();

        highestEducationLevelList = {
            dataList: readHighestEducationLevel.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return highestEducationLevelList;
    }
}
