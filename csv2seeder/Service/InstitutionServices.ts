import Institution from 'App/Models/Institution';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class InstitutionServices extends BaseService {
    public async getInstitutions(): Promise<
        DefaultListResponse<InstitutionsResponse>
    > {
        let institutionList =
            new DefaultListResponse<InstitutionsResponse>();
        const readInstitution = await Institution.query();

        institutionList = {
            dataList: readInstitution.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return institutionList;
    }
}
