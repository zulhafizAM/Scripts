import BaseService from 'App/Services/BaseService';
import PensionDetail from 'App/Models/PensionDetail';

export default class PensionDetailServices extends BaseService {
    public async getPensionDetails({ page = 1, perPage = 10 }) {
        return this.getDataList(PensionDetail, { page, perPage });
    }

    public async getPensionDetail(pensionDetailId: number) {
        const readPensionDetail = await PensionDetail.query()
            .where('active', true)
            .where('id', pensionDetailId)
            .preload('employee', (query) => query.where('active', true))
            .preload('pensionDetailProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readPensionDetail;
    }

    public async addPensionDetail(payload) {
        return this.createData(PensionDetail, payload, 'Admin');
    }

    public async editPensionDetail(id: number, payload) {
        return this.updateData(PensionDetail, id, payload, 'Admin');
    }
}
