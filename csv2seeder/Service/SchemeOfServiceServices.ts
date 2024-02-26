import SchemeOfService from 'App/Models/SchemeOfService';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class SchemeOfServiceServices extends BaseService {
    public async getSchemeOfServices(): Promise<
        DefaultListResponse<SchemeOfServicesResponse>
    > {
        let schemeOfServiceList =
            new DefaultListResponse<SchemeOfServicesResponse>();
        const readSchemeOfService = await SchemeOfService.query();

        schemeOfServiceList = {
            dataList: readSchemeOfService.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return schemeOfServiceList;
    }
}
