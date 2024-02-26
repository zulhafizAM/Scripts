import BaseService from 'App/Services/BaseService';
import PassportPaymentClaim from 'App/Models/PassportPaymentClaim';

export default class PassportPaymentClaimServices extends BaseService {
    public async getPassportPaymentClaims({ page = 1, perPage = 10 }) {
        return this.getDataList(PassportPaymentClaim, { page, perPage });
    }

    public async getPassportPaymentClaim(passportPaymentClaimId: number) {
        const readPassportPaymentClaim = await PassportPaymentClaim.query()
            .where('active', true)
            .where('id', passportPaymentClaimId)
            .preload('allowance', (query) => query.where('active', true))
            .preload('passportPaymentProcess', (query) => query.where('active', true))
            .firstOrFail();

        return readPassportPaymentClaim;
    }

    public async addPassportPaymentClaim(payload) {
        return this.createData(PassportPaymentClaim, payload, 'Admin');
    }

    public async editPassportPaymentClaim(id: number, payload) {
        return this.updateData(PassportPaymentClaim, id, payload, 'Admin');
    }
}
