import BaseService from 'App/Services/BaseService';
import NewOffer from 'App/Models/NewOffer';

export default class NewOfferServices extends BaseService {
    public async getNewOffers({ page = 1, perPage = 10 }) {
        return this.getDataList(NewOffer, { page, perPage });
    }

    public async getNewOffer(newOfferId: number) {
        const readNewOffer = await NewOffer.query()
            .where('active', true)
            .where('id', newOfferId)
            .preload('employee', (query) => query.where('active', true))
            .preload('meeting', (query) => query.where('active', true))
            .preload('newOfferProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readNewOffer;
    }

    public async addNewOffer(payload) {
        return this.createData(NewOffer, payload, 'Admin');
    }

    public async editNewOffer(id: number, payload) {
        return this.updateData(NewOffer, id, payload, 'Admin');
    }
}
