import City from 'App/Models/City';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class CityServices extends BaseService {
    public async getCities(): Promise<
        DefaultListResponse<CitiesResponse>
    > {
        let cityList =
            new DefaultListResponse<CitiesResponse>();
        const readCity = await City.query();

        cityList = {
            dataList: readCity.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return cityList;
    }
}
