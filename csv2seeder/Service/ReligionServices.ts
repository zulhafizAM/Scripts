import Religion from 'App/Models/Religion';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class ReligionServices extends BaseService {
    public async getReligions(): Promise<
        DefaultListResponse<ReligionsResponse>
    > {
        let religionList =
            new DefaultListResponse<ReligionsResponse>();
        const readReligion = await Religion.query();

        religionList = {
            dataList: readReligion.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return religionList;
    }
}
