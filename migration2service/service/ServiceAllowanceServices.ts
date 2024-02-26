import BaseService from 'App/Services/BaseService';
import ServiceAllowance from 'App/Models/ServiceAllowance';

export default class ServiceAllowanceServices extends BaseService {
    public async getServiceAllowances({ page = 1, perPage = 10 }) {
        return this.getDataList(ServiceAllowance, { page, perPage });
    }

    public async getServiceAllowance(serviceAllowanceId: number) {
        const readServiceAllowance = await ServiceAllowance.query()
            .where('active', true)
            .where('id', serviceAllowanceId)
            .preload('allowance', (query) => query.where('active', true))
            .preload('allowanceType', (query) => query.where('active', true))
            .preload('clothingAssistances', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('stateVisitAllowances', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('funeralArrangementRequests', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('employeeWelfareFunds', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('houseMovingAllowances', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('passportPaymentClaims', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('personalTravelInsuranceClaims', (query) =>
                query.where('active', true).limit(10),
            )
            .preload('cargoShippingReimbursements', (query) =>
                query.where('active', true).limit(10),
            )
            .firstOrFail();

        return readServiceAllowance;
    }

    public async addServiceAllowance(payload) {
        return this.createData(ServiceAllowance, payload, 'Admin');
    }

    public async editServiceAllowance(id: number, payload) {
        return this.updateData(ServiceAllowance, id, payload, 'Admin');
    }
}
