import BaseService from 'App/Services/BaseService';
import VehicleLoanProcesses from 'App/Models/VehicleLoanProcesses';

export default class VehicleLoanProcessesServices extends BaseService {
    public async getVehicleLoanProcesses({ page = 1, perPage = 10 }) {
        return this.getDataList(VehicleLoanProcesses, { page, perPage });
    }

    public async getVehicleLoanProcesses(vehicleLoanProcessesId: number) {
        const readVehicleLoanProcesses = await VehicleLoanProcesses.query()
            .where('active', true)
            .where('id', vehicleLoanProcessesId)
            .preload('vehicleLoan', (query) => query.where('active', true))
            .preload('verifier', (query) => query.where('active', true))
            .preload('supporter', (query) => query.where('active', true))
            .preload('approver', (query) => query.where('active', true))
            .firstOrFail();

        return readVehicleLoanProcesses;
    }

    public async addVehicleLoanProcesses(payload) {
        return this.createData(VehicleLoanProcesses, payload, 'Admin');
    }

    public async editVehicleLoanProcesses(id: number, payload) {
        return this.updateData(VehicleLoanProcesses, id, payload, 'Admin');
    }
}
