import EmploymentStatus from 'App/Models/EmploymentStatus';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class EmploymentStatusServices extends BaseService {
    public async getEmploymentStatuses(): Promise<
        DefaultListResponse<EmploymentStatusesResponse>
    > {
        let employmentStatusList =
            new DefaultListResponse<EmploymentStatusesResponse>();
        const readEmploymentStatus = await EmploymentStatus.query();

        employmentStatusList = {
            dataList: readEmploymentStatus.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return employmentStatusList;
    }
}
