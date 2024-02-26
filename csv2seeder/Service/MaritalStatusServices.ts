import MaritalStatus from 'App/Models/MaritalStatus';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class MaritalStatusServices extends BaseService {
    public async getMaritalStatuses(): Promise<
        DefaultListResponse<MaritalStatusesResponse>
    > {
        let maritalStatusList =
            new DefaultListResponse<MaritalStatusesResponse>();
        const readMaritalStatus = await MaritalStatus.query();

        maritalStatusList = {
            dataList: readMaritalStatus.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return maritalStatusList;
    }
}
