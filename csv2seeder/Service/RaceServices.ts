import Race from 'App/Models/Race';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class RaceServices extends BaseService {
    public async getRaces(): Promise<
        DefaultListResponse<RacesResponse>
    > {
        let raceList =
            new DefaultListResponse<RacesResponse>();
        const readRace = await Race.query();

        raceList = {
            dataList: readRace.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return raceList;
    }
}
