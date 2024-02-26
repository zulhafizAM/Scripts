import Title from 'App/Models/Title';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class TitleServices extends BaseService {
    public async getTitles(): Promise<
        DefaultListResponse<TitlesResponse>
    > {
        let titleList =
            new DefaultListResponse<TitlesResponse>();
        const readTitle = await Title.query();

        titleList = {
            dataList: readTitle.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return titleList;
    }
}
