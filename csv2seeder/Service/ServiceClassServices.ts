import ServiceClass from 'App/Models/ServiceClass';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class ServiceClassServices extends BaseService {
    public async getServiceClasses(): Promise<
        DefaultListResponse<ServiceClassesResponse>
    > {
        let serviceClassList =
            new DefaultListResponse<ServiceClassesResponse>();
        const readServiceClass = await ServiceClass.query();

        serviceClassList = {
            dataList: readServiceClass.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return serviceClassList;
    }
}
