import BaseService from 'App/Services/BaseService';
import CancelSuspensionOrDismissal from 'App/Models/CancelSuspensionOrDismissal';

export default class CancelSuspensionOrDismissalServices extends BaseService {
    public async getCancelSuspensionOrDismissals({ page = 1, perPage = 10 }) {
        return this.getDataList(CancelSuspensionOrDismissal, { page, perPage });
    }

    public async getCancelSuspensionOrDismissal(cancelSuspensionOrDismissalId: number) {
        const readCancelSuspensionOrDismissal = await CancelSuspensionOrDismissal.query()
            .where('active', true)
            .where('id', cancelSuspensionOrDismissalId)
            .preload('integrity', (query) => query.where('active', true))
            .firstOrFail();

        return readCancelSuspensionOrDismissal;
    }

    public async addCancelSuspensionOrDismissal(payload) {
        return this.createData(CancelSuspensionOrDismissal, payload, 'Admin');
    }

    public async editCancelSuspensionOrDismissal(id: number, payload) {
        return this.updateData(CancelSuspensionOrDismissal, id, payload, 'Admin');
    }
}
