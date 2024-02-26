import Country from 'App/Models/Country';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class CountryServices extends BaseService {
    public async getCountries(): Promise<
        DefaultListResponse<CountriesResponse>
    > {
        let countryList =
            new DefaultListResponse<CountriesResponse>();
        const readCountry = await Country.query();

        countryList = {
            dataList: readCountry.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return countryList;
    }
}
