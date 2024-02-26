import BaseService from 'App/Services/BaseService';
import VehicleLoan from 'App/Models/VehicleLoan';

export default class VehicleLoanServices extends BaseService {
    public async getVehicleLoans({ page = 1, perPage = 10 }) {
        return this.getDataList(VehicleLoan, { page, perPage });
    }

    public async getVehicleLoan(vehicleLoanId: number) {
        const readVehicleLoan = await VehicleLoan.query()
            .where('active', true)
            .where('id', vehicleLoanId)
            .preload('loan', (query) => query.where('active', true))
            .preload('vehicleLoanProcesses', (query) => query.where('active', true))
            .firstOrFail();

        return readVehicleLoan;
    }

    public async addVehicleLoan(payload) {
        return this.createData(VehicleLoan, payload, 'Admin');
    }

    public async editVehicleLoan(id: number, payload) {
        return this.updateData(VehicleLoan, id, payload, 'Admin');
    }
}
