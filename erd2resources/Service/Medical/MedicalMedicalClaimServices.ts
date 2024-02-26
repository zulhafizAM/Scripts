import Database from '@ioc:Adonis/Lucid/Database';
import ListMedicalMedicalClaimResponse from 'App/Models/DTO/Medical/MedicalClaim/ListMedicalMedicalClaimResponse';
import GetMedicalMedicalClaimResponse, { MedicalMedicalClaimResponse } from 'App/Models/DTO/Medical/MedicalClaim/GetMedicalMedicalClaimResponse';
import MedicalClaim from 'App/Models/MedicalClaim';
import BaseService from 'App/Services/Shared/BaseService';
export default class MedicalMedicalClaimServices extends BaseService {
    public async getMedicalClaims(payload): Promise<ListMedicalMedicalClaimResponse> {
        let medicalClaimList: ListMedicalMedicalClaimResponse = new ListMedicalMedicalClaimResponse();
        const readMedicalClaims = await MedicalClaim.query();

        medicalClaimList = {
            pageNum: payload.pageNum,
            totalData: readMedicalClaims.length,
            totalPage: Math.ceil(readMedicalClaims.length / payload.pageSize),
            medicalClaims: readMedicalClaims.map((result) => ({
                employeeId: result.employeeId,
                clinicId: result.clinicId,
                treatmentDate: result.treatmentDate,
                covered: result.covered,
                remainder: result.remainder,
                paymentType: result.paymentType,
                status: result.status,
                remark: result.remark,
            })),
        } as ListMedicalMedicalClaimResponse;

        if (payload.orderBy !== null) {
            this.ordering(payload, medicalClaimList, 'medicalClaims');
        }

        medicalClaimList.medicalClaims =
            medicalClaimList.medicalClaims.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        return medicalClaimList;
    }
    public async getMedicalClaim(id: number): Promise<GetMedicalMedicalClaimResponse> {
        let details: GetMedicalMedicalClaimResponse = new GetMedicalMedicalClaimResponse();
        const result = await MedicalClaim.query()
            .where('id', id)
            .firstOrFail();

        details.medicalClaim = {
            employeeId: result.employeeId,
            clinicId: result.clinicId,
            treatmentDate: result.treatmentDate,
            covered: result.covered,
            remainder: result.remainder,
            paymentType: result.paymentType,
            status: result.status,
            remark: result.remark,
        } as MedicalMedicalClaimResponse;

        return details;
    }

    public async addMedicalClaim(payload): Promise<void> {
        const transaction = await Database.transaction();
        try {
            let medicalClaim = new MedicalClaim();
            medicalClaim.employeeId = payload.employeeId;
            medicalClaim.clinicId = payload.clinicId;
            medicalClaim.treatmentDate = payload.treatmentDate;
            medicalClaim.covered = payload.covered;
            medicalClaim.remainder = payload.remainder;
            medicalClaim.paymentType = payload.paymentType;
            medicalClaim.status = payload.status;
            medicalClaim.remark = payload.remark;
            await medicalClaim.save();

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
    public async editMedicalClaim(payload): Promise<void> {
        const transaction = await Database.transaction();
        try {
            const medicalClaim = await MedicalClaim.query()
                .where('id', payload.id)
                .firstOrFail();

            medicalClaim.employeeId = payload.employeeId;
            medicalClaim.clinicId = payload.clinicId;
            medicalClaim.treatmentDate = payload.treatmentDate;
            medicalClaim.covered = payload.covered;
            medicalClaim.remainder = payload.remainder;
            medicalClaim.paymentType = payload.paymentType;
            medicalClaim.status = payload.status;
            medicalClaim.remark = payload.remark;
            await medicalClaim.save();

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
