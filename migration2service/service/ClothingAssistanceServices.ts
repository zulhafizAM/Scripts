import BaseService from 'App/Services/BaseService';
import ClothingAssistance from 'App/Models/ClothingAssistance';

export default class ClothingAssistanceServices extends BaseService {
    public async getClothingAssistances({ page = 1, perPage = 10 }) {
        return this.getDataList(ClothingAssistance, { page, perPage });
    }

    public async getClothingAssistance(clothingAssistanceId: number) {
        const readClothingAssistance = await ClothingAssistance.query()
            .where('active', true)
            .where('id', clothingAssistanceId)
            .preload('clothingAssistanceProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readClothingAssistance;
    }

    public async addClothingAssistance(payload) {
        return this.createData(ClothingAssistance, payload, 'Admin');
    }

    public async editClothingAssistance(id: number, payload) {
        return this.updateData(ClothingAssistance, id, payload, 'Admin');
    }
}
