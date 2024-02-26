import State from 'App/Models/State';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class StateServices extends BaseService {
    public async getStates(): Promise<
        DefaultListResponse<StatesResponse>
    > {
        let stateList =
            new DefaultListResponse<StatesResponse>();
        const readState = await State.query();

        stateList = {
            dataList: readState.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return stateList;
    }
}
