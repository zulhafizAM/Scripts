import Nationality from 'App/Models/Nationality';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class NationalityServices extends BaseService {
    public async getNationalities(): Promise<
        DefaultListResponse<NationalitiesResponse>
    > {
        let nationalityList =
            new DefaultListResponse<NationalitiesResponse>();
        const readNationality = await Nationality.query();

        nationalityList = {
            dataList: readNationality.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return nationalityList;
    }
}
