import BaseService from 'App/Services/BaseService';
import ClothingAssistanceProcess from 'App/Models/ClothingAssistanceProcess';

export default class ClothingAssistanceProcessServices extends BaseService {
    public async getClothingAssistanceProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(ClothingAssistanceProcess, { page, perPage });
    }

    public async getClothingAssistanceProcess(clothingAssistanceProcessId: number) {
        const readClothingAssistanceProcess = await ClothingAssistanceProcess.query()
            .where('active', true)
            .where('id', clothingAssistanceProcessId)
            .preload('clothing', (query) => query.where('active', true))
            .preload('directorSupporter', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('appointedSupporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readClothingAssistanceProcess;
    }

    public async addClothingAssistanceProcess(payload) {
        return this.createData(ClothingAssistanceProcess, payload, 'Admin');
    }

    public async editClothingAssistanceProcess(id: number, payload) {
        return this.updateData(ClothingAssistanceProcess, id, payload, 'Admin');
    }
}
