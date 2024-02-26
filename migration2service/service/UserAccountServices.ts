import BaseService from 'App/Services/BaseService';
import UserAccount from 'App/Models/UserAccount';

export default class UserAccountServices extends BaseService {
    public async getUserAccounts({ page = 1, perPage = 10 }) {
        return this.getDataList(UserAccount, { page, perPage });
    }

    public async getUserAccount(userAccountId: number) {
        const readUserAccount = await UserAccount.query()
            .where('active', true)
            .where('id', userAccountId)
            .preload('clinic', (query) => query.where('active', true))
            .preload('employee', (query) => query.where('active', true))
            .preload('candidate', (query) => query.where('active', true))
            .firstOrFail();

        return readUserAccount;
    }

    public async addUserAccount(payload) {
        return this.createData(UserAccount, payload, 'Admin');
    }

    public async editUserAccount(id: number, payload) {
        return this.updateData(UserAccount, id, payload, 'Admin');
    }
}
