import BaseService from 'App/Services/BaseService';
import CargoShippingReimbursement from 'App/Models/CargoShippingReimbursement';

export default class CargoShippingReimbursementServices extends BaseService {
    public async getCargoShippingReimbursements({ page = 1, perPage = 10 }) {
        return this.getDataList(CargoShippingReimbursement, { page, perPage });
    }

    public async getCargoShippingReimbursement(cargoShippingReimbursementId: number) {
        const readCargoShippingReimbursement = await CargoShippingReimbursement.query()
            .where('active', true)
            .where('id', cargoShippingReimbursementId)
            .preload('allowance', (query) => query.where('active', true))
            .preload('cargoShippingProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readCargoShippingReimbursement;
    }

    public async addCargoShippingReimbursement(payload) {
        return this.createData(CargoShippingReimbursement, payload, 'Admin');
    }

    public async editCargoShippingReimbursement(id: number, payload) {
        return this.updateData(CargoShippingReimbursement, id, payload, 'Admin');
    }
}
