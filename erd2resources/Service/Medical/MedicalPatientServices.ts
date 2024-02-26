import Database from '@ioc:Adonis/Lucid/Database';
import ListMedicalPatientResponse from 'App/Models/DTO/Medical/Patient/ListMedicalPatientResponse';
import GetMedicalPatientResponse, { MedicalPatientResponse } from 'App/Models/DTO/Medical/Patient/GetMedicalPatientResponse';
import Patient from 'App/Models/Patient';
import BaseService from 'App/Services/Shared/BaseService';
export default class MedicalPatientServices extends BaseService {
    public async getPatients(payload): Promise<ListMedicalPatientResponse> {
        let patientList: ListMedicalPatientResponse = new ListMedicalPatientResponse();
        const readPatients = await Patient.query();

        patientList = {
            pageNum: payload.pageNum,
            totalData: readPatients.length,
            totalPage: Math.ceil(readPatients.length / payload.pageSize),
            patients: readPatients.map((result) => ({
                claimId: result.claimId,
                relationshipId: result.relationshipId,
                placementId: result.placementId,
                name: result.name,
                identityDocumentCard: result.identityDocumentCard,
                status: result.status,
                remark: result.remark,
            })),
        } as ListMedicalPatientResponse;

        if (payload.orderBy !== null) {
            this.ordering(payload, patientList, 'patients');
        }

        patientList.patients =
            patientList.patients.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        return patientList;
    }
    public async getPatient(id: number): Promise<GetMedicalPatientResponse> {
        let details: GetMedicalPatientResponse = new GetMedicalPatientResponse();
        const result = await Patient.query()
            .where('id', id)
            .firstOrFail();

        details.patient = {
            claimId: result.claimId,
            relationshipId: result.relationshipId,
            placementId: result.placementId,
            name: result.name,
            identityDocumentCard: result.identityDocumentCard,
            status: result.status,
            remark: result.remark,
        } as MedicalPatientResponse;

        return details;
    }

    public async addPatient(payload): Promise<void> {
        const transaction = await Database.transaction();
        try {
            let patient = new Patient();
            patient.claimId = payload.claimId;
            patient.relationshipId = payload.relationshipId;
            patient.placementId = payload.placementId;
            patient.name = payload.name;
            patient.identityDocumentCard = payload.identityDocumentCard;
            patient.status = payload.status;
            patient.remark = payload.remark;
            await patient.save();

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
    public async editPatient(payload): Promise<void> {
        const transaction = await Database.transaction();
        try {
            const patient = await Patient.query()
                .where('id', payload.id)
                .firstOrFail();

            patient.claimId = payload.claimId;
            patient.relationshipId = payload.relationshipId;
            patient.placementId = payload.placementId;
            patient.name = payload.name;
            patient.identityDocumentCard = payload.identityDocumentCard;
            patient.status = payload.status;
            patient.remark = payload.remark;
            await patient.save();

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
