import BaseService from 'App/Services/BaseService';
import UnspecifiedRetirementGroup from 'App/Models/UnspecifiedRetirementGroup';

export default class UnspecifiedRetirementGroupServices extends BaseService {
    public async getUnspecifiedRetirementGroups({ page = 1, perPage = 10 }) {
        return this.getDataList(UnspecifiedRetirementGroup, { page, perPage });
    }

    public async getUnspecifiedRetirementGroup(unspecifiedRetirementGroupId: number) {
        const readUnspecifiedRetirementGroup = await UnspecifiedRetirementGroup.query()
            .where('active', true)
            .where('id', unspecifiedRetirementGroupId)
            .preload('unspecifiedRetirementGroups', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readUnspecifiedRetirementGroup;
    }

    public async addUnspecifiedRetirementGroup(payload) {
        return this.createData(UnspecifiedRetirementGroup, payload, 'Admin');
    }

    public async editUnspecifiedRetirementGroup(id: number, payload) {
        return this.updateData(UnspecifiedRetirementGroup, id, payload, 'Admin');
    }
}
