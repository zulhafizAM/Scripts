import Database from '@ioc:Adonis/Lucid/Database';
import BaseService from 'App/Services/Shared/BaseService';
export default class MedicalEmployeeMedicalClaimServices extends BaseService {
    public async getMedicalClaim(
        payload,
    ): Promise<DefaultDataResponse<MedicalEmployeeMedicalClaimResponse>> {
        let medicalClaim = new DefaultDataResponse<MedicalEmployeeMedicalClaimResponse>();
        const readMedicalClaim = await MedicalClaim.query()
            .where('id', payload.id)
            .firstOrFail();
        medicalClaim = {
            details: {
                id: Number(readMedicalClaim.id),
            },
        } as DefaultDataResponse<MedicalEmployeeMedicalClaimResponse>;
        return medicalClaim;
    }
}
