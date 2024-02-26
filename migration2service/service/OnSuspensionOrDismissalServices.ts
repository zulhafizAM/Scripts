import BaseService from 'App/Services/BaseService';
import OnSuspensionOrDismissal from 'App/Models/OnSuspensionOrDismissal';

export default class OnSuspensionOrDismissalServices extends BaseService {
    public async getOnSuspensionOrDismissals({ page = 1, perPage = 10 }) {
        return this.getDataList(OnSuspensionOrDismissal, { page, perPage });
    }

    public async getOnSuspensionOrDismissal(onSuspensionOrDismissalId: number) {
        const readOnSuspensionOrDismissal = await OnSuspensionOrDismissal.query()
            .where('active', true)
            .where('id', onSuspensionOrDismissalId)
            .preload('integrity', (query) => query.where('active', true))
            .firstOrFail();

        return readOnSuspensionOrDismissal;
    }

    public async addOnSuspensionOrDismissal(payload) {
        return this.createData(OnSuspensionOrDismissal, payload, 'Admin');
    }

    public async editOnSuspensionOrDismissal(id: number, payload) {
        return this.updateData(OnSuspensionOrDismissal, id, payload, 'Admin');
    }
}
