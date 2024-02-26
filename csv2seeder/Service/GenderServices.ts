import Gender from 'App/Models/Gender';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class GenderServices extends BaseService {
    public async getGenders(): Promise<
        DefaultListResponse<GendersResponse>
    > {
        let genderList =
            new DefaultListResponse<GendersResponse>();
        const readGender = await Gender.query();

        genderList = {
            dataList: readGender.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return genderList;
    }
}
