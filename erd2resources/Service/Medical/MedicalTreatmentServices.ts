import Database from '@ioc:Adonis/Lucid/Database';
import ListMedicalTreatmentResponse from 'App/Models/DTO/Medical/Treatment/ListMedicalTreatmentResponse';
import GetMedicalTreatmentResponse, { MedicalTreatmentResponse } from 'App/Models/DTO/Medical/Treatment/GetMedicalTreatmentResponse';
import Treatment from 'App/Models/Treatment';
import BaseService from 'App/Services/Shared/BaseService';
export default class MedicalTreatmentServices extends BaseService {
    public async getTreatments(payload): Promise<ListMedicalTreatmentResponse> {
        let treatmentList: ListMedicalTreatmentResponse = new ListMedicalTreatmentResponse();
        const readTreatments = await Treatment.query();

        treatmentList = {
            pageNum: payload.pageNum,
            totalData: readTreatments.length,
            totalPage: Math.ceil(readTreatments.length / payload.pageSize),
            treatments: readTreatments.map((result) => ({
                patientId: result.patientId,
                description: result.description,
                amount: result.amount,
                status: result.status,
                remark: result.remark,
            })),
        } as ListMedicalTreatmentResponse;

        if (payload.orderBy !== null) {
            this.ordering(payload, treatmentList, 'treatments');
        }

        treatmentList.treatments =
            treatmentList.treatments.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        return treatmentList;
    }
    public async getTreatment(id: number): Promise<GetMedicalTreatmentResponse> {
        let details: GetMedicalTreatmentResponse = new GetMedicalTreatmentResponse();
        const result = await Treatment.query()
            .where('id', id)
            .firstOrFail();

        details.treatment = {
            patientId: result.patientId,
            description: result.description,
            amount: result.amount,
            status: result.status,
            remark: result.remark,
        } as MedicalTreatmentResponse;

        return details;
    }

    public async addTreatment(payload): Promise<void> {
        const transaction = await Database.transaction();
        try {
            let treatment = new Treatment();
            treatment.patientId = payload.patientId;
            treatment.description = payload.description;
            treatment.amount = payload.amount;
            treatment.status = payload.status;
            treatment.remark = payload.remark;
            await treatment.save();

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
    public async editTreatment(payload): Promise<void> {
        const transaction = await Database.transaction();
        try {
            const treatment = await Treatment.query()
                .where('id', payload.id)
                .firstOrFail();

            treatment.patientId = payload.patientId;
            treatment.description = payload.description;
            treatment.amount = payload.amount;
            treatment.status = payload.status;
            treatment.remark = payload.remark;
            await treatment.save();

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
