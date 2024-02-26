import BaseService from 'App/Services/BaseService';
import ApiToken from 'App/Models/ApiToken';

export default class ApiTokenServices extends BaseService {
    public async getApiTokens({ page = 1, perPage = 10 }) {
        return this.getDataList(ApiToken, { page, perPage });
    }

    public async getApiToken(apiTokenId: number) {
        const readApiToken = await ApiToken.query()
            .where('active', true)
            .where('id', apiTokenId)
            .preload('user', (query) => query.where('active', true))
            .firstOrFail();

        return readApiToken;
    }

    public async addApiToken(payload) {
        return this.createData(ApiToken, payload, 'Admin');
    }

    public async editApiToken(id: number, payload) {
        return this.updateData(ApiToken, id, payload, 'Admin');
    }
}
