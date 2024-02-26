import BaseService from 'App/Services/BaseService';
import Activity from 'App/Models/Activity';

export default class ActivityServices extends BaseService {
    public async getActivities({ page = 1, perPage = 10 }) {
        return this.getDataList(Activity, { page, perPage });
    }

    public async getActivity(activityId: number) {
        const readActivity = await Activity.query()
            .where('active', true)
            .where('id', activityId)
            .preload('personalDetail', (query) => query.where('active', true))
            .firstOrFail();

        return readActivity;
    }

    public async addActivity(payload) {
        return this.createData(Activity, payload, 'Admin');
    }

    public async editActivity(id: number, payload) {
        return this.updateData(Activity, id, payload, 'Admin');
    }
}
