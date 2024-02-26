import AgencyGroup from 'App/Models/AgencyGroup';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class AgencyGroupServices extends BaseService {
    public async getAgencyGroups(): Promise<
        DefaultListResponse<AgencyGroupsResponse>
    > {
        let agencyGroupList =
            new DefaultListResponse<AgencyGroupsResponse>();
        const readAgencyGroup = await AgencyGroup.query();

        agencyGroupList = {
            dataList: readAgencyGroup.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return agencyGroupList;
    }
}
