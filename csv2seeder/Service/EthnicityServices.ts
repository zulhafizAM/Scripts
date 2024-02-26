import Ethnicity from 'App/Models/Ethnicity';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class EthnicityServices extends BaseService {
    public async getEthnicities(): Promise<
        DefaultListResponse<EthnicitiesResponse>
    > {
        let ethnicityList =
            new DefaultListResponse<EthnicitiesResponse>();
        const readEthnicity = await Ethnicity.query();

        ethnicityList = {
            dataList: readEthnicity.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return ethnicityList;
    }
}
