import BaseService from 'App/Services/BaseService';
import CargoShippingProcess from 'App/Models/CargoShippingProcess';

export default class CargoShippingProcessServices extends BaseService {
    public async getCargoShippingProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(CargoShippingProcess, { page, perPage });
    }

    public async getCargoShippingProcess(cargoShippingProcessId: number) {
        const readCargoShippingProcess = await CargoShippingProcess.query()
            .where('active', true)
            .where('id', cargoShippingProcessId)
            .preload('shipping', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readCargoShippingProcess;
    }

    public async addCargoShippingProcess(payload) {
        return this.createData(CargoShippingProcess, payload, 'Admin');
    }

    public async editCargoShippingProcess(id: number, payload) {
        return this.updateData(CargoShippingProcess, id, payload, 'Admin');
    }
}
