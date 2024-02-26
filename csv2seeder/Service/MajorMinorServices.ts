import MajorMinor from 'App/Models/MajorMinor';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class MajorMinorServices extends BaseService {
    public async getMajorMinors(): Promise<
        DefaultListResponse<MajorMinorsResponse>
    > {
        let majorMinorList =
            new DefaultListResponse<MajorMinorsResponse>();
        const readMajorMinor = await MajorMinor.query();

        majorMinorList = {
            dataList: readMajorMinor.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return majorMinorList;
    }
}
